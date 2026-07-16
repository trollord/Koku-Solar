import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const REDIRECT_SECONDS = 5;

export default function ThankYou() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      navigate('/');
      return;
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, navigate]);

  return (
    <div className="bg-white pt-16">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-yellow-50 px-4 py-20">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl border border-orange-100 p-8 sm:p-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 mb-6">
            <CheckCircle className="w-12 h-12 text-koku-orange" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-koku-dark mb-4">Thank You!</h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Your request for a solar assessment has been successfully submitted. Our team will get back to you shortly.
          </p>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
            <div
              className="bg-koku-orange h-2 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${(seconds / REDIRECT_SECONDS) * 100}%` }}
            />
          </div>

          <p className="text-koku-dark font-medium mb-6">
            Redirecting you back to the homepage in{' '}
            <span className="text-koku-orange font-bold">{seconds}</span>{' '}
            {seconds === 1 ? 'second' : 'seconds'}...
          </p>

          <Link
            to="/"
            className="inline-block text-koku-orange hover:text-koku-dark font-medium underline transition-colors"
          >
            Click here if you are not automatically redirected.
          </Link>
        </div>
      </section>
    </div>
  );
}
