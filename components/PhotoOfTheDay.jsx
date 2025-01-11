"use client";

import React, { useState, useEffect } from "react";
import Card , {CardHeader,CardContent,Skeleton} from "./ui/Card";

const PhotoOfTheDay = () => {
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchPhotos = async () => {
        try {
          const response = await fetch("/api/photo");
          const data = await response.json();
  
          // Select the "Photo of the Day"
          const photoOfTheDay = selectPhotoOfTheDay(data);
          setPhoto(photoOfTheDay);
        } catch (error) {
          console.error("Error fetching photos:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPhotos();
    }, []);
  
    const selectPhotoOfTheDay = (photos) => {
        
      if (!photos || photos.length === 0) return null;
      const today = new Date();
      const index = today.getDate() % photos.length;
      return photos[index];
    };
  
    return (
      <Card className="w-96 mx-auto mt-8">
        <CardHeader className="text-center">Photo of the Day</CardHeader>
        <CardContent>
          {loading ? (
            <Skeleton className="" />
          ) : (
            photo && (
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-80 object-cover rounded"
              />
            )
          )}
        </CardContent>
      </Card>
    );
  };
  
  export default PhotoOfTheDay;