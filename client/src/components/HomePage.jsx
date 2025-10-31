import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'



const Homepage = () => {
  const [term, setTerm] = React.useState("");
    const [user,setUser] = React.useState(null);
  const [images, setImages] = React.useState([]);
   const [loading,setLoading] = React.useState(true);
  const [selectedImages, setSelectedImages] = React.useState([]);
    const [topSearches, setTopSearches] = React.useState([]);
     const navigate = useNavigate();

    // Load top searches when page loads
  React.useEffect(() => {
    fetchTopSearches();
  }, []);

  const fetchTopSearches = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/search/top");
      setTopSearches(res.data.top || []);
    } catch (error) {
      console.error("Failed to fetch top searches:", error);
    }
  };

      React.useEffect(() => {
        const userData = localStorage.getItem('user')
        if(userData){
            setUser(JSON.parse(userData))
        }else{
            navigate('/login')
        }
        setLoading(false)
    },[navigate])


// 🔍 Handle image search
const handleSearch = async (e) => {
  e.preventDefault();

  if (!term.trim()) {
    alert("Please enter a search term");
    return;
  }

  try {
        const res = await axios.post(
      "http://localhost:8000/api/search",
      { term }, // ✅ send term in body
      { withCredentials: true } // ✅ send JWT cookie
    );

    setImages(res.data);
  } catch (error) {
    console.error("Error fetching images:", error);
    alert("Failed to fetch images.");
  }
};


  // 🖱 Toggle image selection
  const toggleSelect = (img) => {
    setSelectedImages((prev) =>
      prev.includes(img) ? prev.filter((i) => i !== img) : [...prev, img]
    );
  };

  // 🚪 Logout
    const handleLogout = async() => {
      try {
              await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`,{} ,{withCredentials:true})
              localStorage.removeItem('user')
              navigate('/login')
      } catch (error) {
         console.error('Logout error',error)
      }

    }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* 🔹 Header Section */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2>Image Search Dashboard</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <strong>Selected: {selectedImages.length}</strong>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>

        {/* 🔹 Top Searches */}
      <section style={{ marginBottom: "20px" }}>
        <h3>🔥 Top Searches</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {topSearches.length > 0 ? (
            topSearches.map((item) => (
              <button
                key={item.term}
                onClick={() => setTerm(item.term)}
                style={{
                  background: "#eee",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                {item.term} ({item.count})
              </button>
            ))
          ) : (
            <p>No top searches yet.</p>
          )}
        </div>
      </section>

      {/* 🔹 Search Bar */}
      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "25px",
        }}
      >
        <input
          type="text"
          placeholder="Search images..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          style={{
            width: "300px",
            padding: "8px",
            fontSize: "16px",
          }}
        />
        <button type="submit" style={{ padding: "8px 16px", fontSize: "16px" }}>
          Search
        </button>
      </form>

      {/* 🔹 Image Grid - 4 columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // ✅ fixed 4-column layout
          gap: "15px",
        }}
      >
        {images.length > 0 ? (
          images.map((img) => {
            const isSelected = selectedImages.includes(img);
            return (
              <div
                key={img.id}
                onClick={() => toggleSelect(img)}
                style={{
                  border: isSelected ? "4px solid green" : "2px solid #ccc",
                  borderRadius: "8px",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "transform 0.2s ease",
                }}
              >
                <img
                  src={img.urls.small}
                  alt={img.alt_description || "image"}
                  width="100%"
                  height="250"
                  style={{
                    objectFit: "cover",
                    display: "block",
                    width: "100%",
                    height: "250px",
                  }}
                />
              </div>
            );
          })
        ) : (
          <p style={{ gridColumn: "span 4", textAlign: "center" }}>
            No images found
          </p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
