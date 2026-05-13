import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TradeConnectAI",
    description: "AI-powered job matching for tradespeople"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
