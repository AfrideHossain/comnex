import { NextResponse } from "next/server";
import products from "@/constants/products.json";

export async function GET(request, { params }) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return NextResponse.json(
      {
        success: false,
        message: "Product not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    product,
  });
}
