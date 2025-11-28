# **App Name**: ChainPay

## Core Features:

- Payment Smart Contracts: EVM smart contracts for creating payments, accepting tokens (ERC20 & native), locking rates, and settling payments in stablecoins. Includes reentrancy guards and overflow checks.
- Off-chain Price Quoting Engine: Backend service that fetches real-time prices from Chainlink, Pyth, and Uniswap TWAP, generates locked rate quotes, and signs quotes using a backend private key.
- Merchant API + Gateway Backend: Backend API for merchant onboarding, payment creation, database logging, webhooks, fiat off-ramping integration stubs, settlement batching, fraud detection, and compliance checks. It will verify signed quotes and trigger settlement.
- Payment Checkout Widget: Fully functional widget with QR code for wallet payment, real-time quote, countdown timer, status updates, multi-chain support, and wallet connector.  Tool to detect potentially fraudulent activity.
- Admin + Merchant Dashboard: Dashboard screens for login, merchant onboarding, payments list, settlement history, payout configuration, API key generation, test mode sandbox, and revenue analytics.
- SDKs (JavaScript + Python): Simple SDK for developers to create payments, get payment status, verify webhook signatures, refund, and settle.
- Fiat Off-Ramp Integration: Integrate with Circle API, Stripe crypto rails, and Coinbase commercial tools, with a plug-in architecture for off-ramp providers.

## Style Guidelines:

- Primary color: Vibrant blue (#29ABE2) to evoke trust and stability, reflecting the reliability of financial transactions. A blue like this alludes to safety and reliability, crucial for a payment gateway.
- Background color: Light blue (#E5F5FF), a very desaturated variant of the primary color. It provides a clean and professional backdrop, allowing the primary color and other elements to stand out.
- Accent color: A contrasting yellow (#FFC107) for CTAs and highlights. Yellow will add a touch of energy and optimism, complementing the trustworthy blue.
- Body and headline font: 'Inter' for a modern, clean, and highly readable sans-serif.
- Code font: 'Source Code Pro' for displaying code snippets in the SDK documentation and developer tools.
- Use simple, minimalist icons to represent different payment methods, currencies, and transaction statuses. Aim for consistency and clarity.
- Subtle animations and transitions to provide feedback on user actions, such as payment confirmations or loading states. Keep animations smooth and non-distracting.