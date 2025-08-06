'use client';
import { useForm } from 'react-hook-form';

interface FormData { name: string; email: string; message: string }

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();
  const onSubmit = async (data: FormData) => { await new Promise(r => setTimeout(r, 500)); alert('Sent!'); };

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-display font-bold mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 text-left">
        <input {...register('name', { required: 'Required' })} placeholder="Name" className="w-full p-3 bg-glass backdrop-blur-glass rounded" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input {...register('email', { required: 'Required', pattern: /\S+@\S+\.\S+/ })} placeholder="Email" className="w-full p-3 bg-glass backdrop-blur-glass rounded" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <textarea {...register('message', { required: 'Required' })} rows={4} placeholder="Message" className="w-full p-3 bg-glass backdrop-blur-glass rounded"></textarea>
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            bg-primary 
            text-white 
            px-6 py-2 
            rounded-full 
            border-2 border-white/50 
            shadow-sm 
            hover:border-white hover:shadow-lg 
            transition-shadow 
            focus:outline-none focus:ring-4 focus:ring-primary/50 
            disabled:opacity-50 disabled:cursor-not-allowed 
            flex items-center justify-center gap-2
          "
          >
          {isSubmitting && (
            <svg
              className="w-5 h-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          )}
          <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
        </button>

      </form>
    </section>
  );
}
