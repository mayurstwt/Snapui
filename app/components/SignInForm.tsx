'use client';

import { useState } from 'react'; // <--- Add this
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have at least 8 characters'),
});

const SignInForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // <--- Add loading state

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setLoading(true); // Set loading true

    const signInData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.error) {
      console.log('Error signing in');
      setLoading(false); // Stop loading if error
      return;
    }

    router.push('/Pages/ComponentsPage');
  };

  return (
    <div className="w-full h-screen flex bg-white dark:bg-black transition-colors duration-300">
      <div className="w-full md:w-1/2 flex items-center bg-gradient-to-b from-black via-purple-900 to-black justify-center px-6 py-12">
        <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
            Sign in to your account
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="mail@example.com"
                        className="dark:bg-zinc-800 dark:text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="dark:bg-zinc-800 dark:text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full mt-6" type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Sign in'}
              </Button>
            </form>

            <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 dark:before:bg-stone-600 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400 dark:after:bg-stone-600">
              or
            </div>

            {/* <GoogleSignInButton>Sign in with Google</GoogleSignInButton> */}

            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              If you don&apos;t have an account, please{' '}
              <Link
                className="text-blue-600 dark:text-blue-400 hover:underline"
                href="/sign-up"
              >
                Sign up
              </Link>
            </p>
          </Form>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 h-full">
        <img
          src="https://res.cloudinary.com/damr9jzpb/image/upload/v1744733591/login-image_gj9g7c.jpg"
          alt="Login Side Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignInForm;
