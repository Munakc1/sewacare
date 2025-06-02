// File: app/api/add/route.js

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, mobile, password } = body;

    // Basic validation
    if (!fullName || !mobile || !password) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!/^\d{10,}$/.test(mobile)) {
      return Response.json({ error: "Invalid mobile number" }, { status: 400 });
    }

    if (password.length < 6) {
      return Response.json({ error: "Password must be at least 6 characters" }, { status: 400 });
    }

    // Simulate sending OTP (you can integrate real SMS later)
    return Response.json({
      message: `OTP sent to ${mobile}`,
      user: { fullName, mobile },
    }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
