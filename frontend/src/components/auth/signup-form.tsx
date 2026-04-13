import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {z} from "zod"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { fi } from "zod/v4/locales"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { useAuthStore } from "@/stores/useAuthStore"
import { useNavigate } from "react-router"

const signUpSchema = z.object({
  firstname: z.string().min(2, "first name have at least 2 characters"),
  lastname: z.string().min(2, "last name have at least 2 characters"),
  email: z.string().email("invalid email address"),
  username: z.string().min(3, "username have at least 3 characters"),
  password: z.string().min(6, "password have at least 6 characters"),

});

type SignUpFormValues = z.infer<typeof signUpSchema>;


export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { signUp } = useAuthStore(); // useAuthStore(); --- IGNORE ---
  const navigate = useNavigate(); // useNavigate(); --- IGNORE ---
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    const { firstname, lastname, email, username, password } = data;
    await signUp(username, password, email, firstname, lastname);
    navigate("/signin");

  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {}
              <div className="flex flex-col items-center gap-2">
                <a
                 href="/"
                  className="mx-auto block w-fit text-center"
                  >
                  <img
                    src="/logo.svg"
                    alt="Logo"
                    />
                </a>
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-muted-foreground text-balance">
                  Please enter your details to sign up.
                </p>
              </div>
              {}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="lastname" className="block text-sm">
                    Last Name
                  </Label>
                  <Input
                    id="lastname"
                    type="text"
                    {...register("lastname")}
                  />
                  {errors.lastname && <p className="text-destructive text-sm">{errors.lastname.message}</p>}
                </div>
                  <div className="space-y-2">
                  <Label htmlFor="firstname" className="block text-sm">
                    First Name
                  </Label>
                  <Input
                    id="firstname"
                    type="text"
                    {...register("firstname")}
                  />
                  {errors.firstname && <p className="text-destructive text-sm">{errors.firstname.message}</p>}
                </div>
              </div>
              {}
              <div className="flex flex-col gap-3">
                  <Label htmlFor="username" className="block text-sm">
                    User Name
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="tak"
                    {...register("username")}
                  />
                  {errors.username && <p className="text-destructive text-sm">{errors.username.message}</p>}
                </div>
              {}
              <div className="flex flex-col gap-3">
                  <Label htmlFor="password" className="block text-sm">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="tak"
                    {...register("password")}
                  />
                  {errors.password && <p className="text-destructive text-sm">{errors.password.message}</p>}
                </div>
              {}
              <div className="flex flex-col gap-3">
                  <Label htmlFor="email" className="block text-sm">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="@gmail.com"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                </div>
              {}
              <Button  
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                Create Account  
              </Button>
              <div className="text-center text-sm"> 
                Already have an account?{" "}
                <a href="/signin" className="text-primary hover:underline">
                  Sign In
                </a>
              </div>



            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholderSignUp.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <div className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
