import { FadeLoader } from "react-spinners";

// app/loading.js
export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            {/* <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div> */}
            <FadeLoader />
        </div>
    );
}