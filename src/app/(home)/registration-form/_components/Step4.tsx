'use client'; // only if you're using App Router
import Image from 'next/image';
import Link from 'next/link';

const Step4 = () => {
    return (
        <div className="pt-[60px] flex flex-col items-center justify-center text-center bg-white px-4">
            <Image
                src="/images/olympiad/success.png" // Ensure this image is in /public
                alt="Check Badge"
                width={100}
                height={100}
                className="mb-6"
            />
            <h2 className="text-green-600 text-xl font-semibold mb-2">Thank you!</h2>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                For choosing Matrix <br /> Olympiad Foundation
            </h1>
            <p className="text-gray-500 text-sm mb-6">
                Want to update your profile or edit your details? <br />
                Login to your account
            </p>
            <Link
                href="/"
                className="btn-secondary  hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition"
            >
                Log in Now →
            </Link>
        </div>
    );
}

export default Step4;
