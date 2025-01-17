import "dotenv/config";

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://ecommerce-glasses.onrender.com/api/v1"
    : "http://localhost:3000/api/v1";
