import { NextResponse } from "next/server";

// Define the Topper type
type Topper = {
  name: string;
  image: string;
  rank: string;
  batch: string;
};

// Define the Toppers response type
type ToppersResponse = {
  [key: string]: Topper[];
};

// Categories array
const categories = [
  { title: "All" },
  { title: "IIT JEE" },
  { title: "NEET" },
  { title: "10th Board" },
  { title: "12th Board" },
  { title: "Olympiad" },
  { title: "Top Rankers" },
];

// Function to generate toppers data
const generateToppers = (): ToppersResponse => {
  return  { data: [
    {
      name: "Shashank Roy",
      image: "https://i.pravatar.cc/300?img=1",
      rank: "11",
      batch: "Matrix Batch 2024",
    },
    {
      name: "Aditi Sharma",
      image: "https://i.pravatar.cc/300?img=2",
      rank: "5",
      batch: "Matrix Batch 2023",
    },
    {
      name: "Rohan Gupta",
      image: "https://i.pravatar.cc/300?img=3",
      rank: "23",
      batch: "Matrix Batch 2025",
    },
    {
      name: "Ishita Verma",
      image: "https://i.pravatar.cc/300?img=4",
      rank: "18",
      batch: "Matrix Batch 2022",
    },
    {
      name: "Ankit Mehra",
      image: "https://i.pravatar.cc/300?img=5",
      rank: "9",
      batch: "Matrix Batch 2024",
    },
  ]};
  return categories.reduce<ToppersResponse>((acc, category) => {
    acc[category.title] = [
      {
        name: "Shashank Roy",
        image: "https://i.pravatar.cc/300?img=1",
        rank: "11",
        batch: "Matrix Batch 2024",
      },
      {
        name: "Aditi Sharma",
        image: "https://i.pravatar.cc/300?img=2",
        rank: "5",
        batch: "Matrix Batch 2023",
      },
      {
        name: "Rohan Gupta",
        image: "https://i.pravatar.cc/300?img=3",
        rank: "23",
        batch: "Matrix Batch 2025",
      },
      {
        name: "Ishita Verma",
        image: "https://i.pravatar.cc/300?img=4",
        rank: "18",
        batch: "Matrix Batch 2022",
      },
      {
        name: "Ankit Mehra",
        image: "https://i.pravatar.cc/300?img=5",
        rank: "9",
        batch: "Matrix Batch 2024",
      },
    ];
    return acc;
  }, {});
};

// API route handler
export async function GET() {
  // Generate the toppers data
  const toppers = generateToppers();

  // Return the response as JSON
  return NextResponse.json(toppers);
}
