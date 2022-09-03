// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // res.status(200).json({ name: "John Doe" });
  if (req.method === "GET") {
    // Process a POST request
    res.status(200).json({ name: "Ali" });
  } else {
    // Handle any other HTTP method
    throw error;
  }
}
