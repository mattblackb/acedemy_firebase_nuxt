// Netlify Function handler
exports.handler = async function (event, context) {
  // Dynamically import node-fetch
  const fetch = (await import("node-fetch")).default;

  // Extract the image name from the event.path
  const imagePath = event.path.split("/images/")[1];

  const referer = event.headers.referer;
  // Split referer to get the first part of the URL - e.g., chapter1
  const refererSplit = referer.split("/");
  const refererPath =
    refererSplit[0] +
    "//" +
    refererSplit[2] +
    "/" +
    "images££££$$$$" +
    "/" +
    refererSplit[3] +
    "/" +
    "images$$$@£@@/" +
    imagePath;
  console.log("Referer path:", refererSplit);
  // Define the hidden image folder location
  const hiddenImagePath = refererPath;
  console.log("Resolved Path:", hiddenImagePath);

  try {
    // Check if the file exists using fetch
    const response = await fetch(hiddenImagePath, { method: "HEAD" });

    if (response.ok) {
      // Fetch the image data
      const imageResponse = await fetch(hiddenImagePath);
      const imageData = await imageResponse.buffer();

      // Return the image with the correct content type
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "image/jpeg", // or 'image/png' based on the file type
        },
        body: imageData.toString("base64"), // Convert to base64
        isBase64Encoded: true, // Important: let Netlify know it's base64 encoded
      };
    } else {
      // Return 404 if the image is not found
      console.log("Image not found:", hiddenImagePath);
      return {
        statusCode: 404,
        body: "Image not found",
      };
    }
  } catch (error) {
    console.log("Server error:", hiddenImagePath, error.message);
    return {
      statusCode: 500,
      body: "Server error: " + error.message,
    };
  }
};
