

export default function AuthLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100 border-b border-gray-300 shadow-sm">
            <main className="flex-grow">{children}</main>
        </div>
    );
}