'use client';

import { useState } from 'react';
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
import { useRouter } from 'next/navigation';

const FormSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have at least 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

const SignUpForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setLoading(true);

    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    });

    if (response.ok) {
      console.log('User created successfully');
      router.push('/sign-in');
    } else {
      console.log('Error creating user');
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen relative flex bg-gradient-to-b from-black via-purple-900 to-black dark:bg-black transition-colors duration-300">
      {/* Background Image - behind on mobile, side image on md+ */}
      <div className="absolute inset-0 md:relative md:w-1/2 h-full z-0">
        <img
          src="https://res.cloudinary.com/damr9jzpb/image/upload/v1744733590/signup-image_fhhrg9.jpg"
          alt="Signup Side Illustration"
          className="w-full h-full object-cover opacity-20 md:opacity-100"
        />
      </div>

      {/* Form Content */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-b from-purple-900  to-black bg-clip-text text-transparent">
            Create your account
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="johndoe"
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">Re-enter Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Re-enter your password"
                        className="dark:bg-zinc-800 dark:text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full mt-6 big-btn-dark-purple" type="submit" disabled={loading}>
                {loading ? 'Creating account...' : 'Sign up'}
              </Button>
            </form>

            <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 dark:before:bg-stone-600 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400 dark:after:bg-stone-600">
              or
            </div>

            {/* Optional Google Sign Up */}
            {/* <GoogleSignInButton>Sign up with Google</GoogleSignInButton> */}

            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              Already have an account?{' '}
              <Link className="text-blue-600 dark:text-blue-400 hover:underline" href="/sign-in">
                Sign in
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>

  );
};

export default SignUpForm;
