# ChainPay - The Stripe for Crypto

ChainPay is a complete Tokenized Real-World Payment Gateway that functions like Stripe for Crypto. It enables merchants to accept on-chain payments in any token and automatically convert them to stablecoins or fiat.

This repository contains the source code for the ChainPay merchant dashboard.

## Features

*   **Dashboard Overview**: Get a quick summary of your store's activity, including total revenue, settlements, total payments, and fraud rate.
*   **Revenue Analytics**: Visualize your revenue trends over time with an interactive chart.
*   **Recent Payments**: View a list of your latest transactions with customer details and payment status.
*   **Responsive Design**: The dashboard is fully responsive and works on all screen sizes.
*   **Developer Tools**: Access API keys, webhooks, logs, and documentation for easy integration.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **UI**: [React](https://react.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library**: [ShadCN/UI](https://ui.shadcn.com/)
*   **Generative AI**: [Firebase Genkit](https://firebase.google.com/docs/genkit)
*   **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
*   **Charts**: [Recharts](https://recharts.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v20 or higher)
*   npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/Project-Name.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Folder Structure

The project follows a standard Next.js App Router structure.

```
.
├── src
│   ├── app         # Main application routes
│   ├── components  # Reusable UI components
│   ├── ai          # Genkit AI flows
│   ├── lib         # Utility functions and libraries
│   └── hooks       # Custom React hooks
├── public          # Static assets
└── ...             # Configuration files
```
