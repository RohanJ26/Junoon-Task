// app/api/photo/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const photo = [
    { "id": 1, "url": "https://assets-natgeotv.fnghub.com/POD/13725.jpg"},
    { "id": 2, "url": "https://assets-natgeotv.fnghub.com/POD/13725.jpg"},
    { "id": 3, "url": "https://twistedsifter.com/wp-content/uploads/2013/04/two-kids-under-a-banana-leaf-in-the-rain-indonesia.jpg"},
    { "id": 4, "url": "https://globalnews.ca/wp-content/uploads/2024/05/Friday-Les-Machazire-Regina-SK-e1717159366609.jpg?quality=85&strip=all&w=1200"},
    { "id": 5, "url": "https://images.pexels.com/photos/10347621/pexels-photo-10347621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    { "id": 6, "url": "https://www.lionstigersandbears.org/wp-content/uploads/2024/01/A-Day-In-The-Life-of-a-Majestic-Tiger_2383399557.jpg"},
    { "id": 7, "url": "https://www.lionstigersandbears.org/wp-content/uploads/2024/01/A-Day-In-The-Life-of-a-Majestic-Tiger_2383399557.jpg"}
  ];
  return NextResponse.json(photo);
}
