"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { domain } from "../route/route";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// FIREBASE AUTH
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase/config";

// REACT ICONS
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

interface FormData {
  name: string;
  email: string;
  phone: number | 0;
  password: string;
}

const AddStaff: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.phone.toString().length !== 10) {
      alert("Invalid phone number");
    } else {
      try {
        console.log(data.email);
        console.log(data.password);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );

        const user = userCredential.user;
        const userId = user.uid;

        const res = await fetch(`${domain}/api/user-ids`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            data: {
              name: data.name,
              mail: data.email,
              number: Number(data.phone),
              user_type: "staff",
              userId: userId,
            },
          }),
        });

        if (res.ok) {
          alert("Staff added successfully");
        } else {
          alert("Something went wrong");
        }
        
      } catch (error: any) {
        alert("Error : " + error.message);
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="text-white bg-gray-900 hover:bg-gray-950 rounded-xl">
          Add Staff
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Add Staff Details</DialogTitle>
          <DialogDescription>
            Make sure that all the information is correct
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            {/* NAME */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                className="col-span-3 rounded-md"
                placeholder="Enter Name..."
                {...register("name", { required: "Name is required" })}
                required
                type="text"
              />
              {errors.name && (
                <span className="text-red-500 col-span-4">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* PHONE NUMBER */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                className="col-span-3 rounded-md"
                placeholder="Enter Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  valueAsNumber: true,
                })}
                required
                type="number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                minLength={10}
              />
              {errors.phone && (
                <span className="text-red-500 col-span-4">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* EMAIL ID */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                className="col-span-3 rounded-md"
                placeholder="Enter Email Id"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                required
              />
              {errors.email && (
                <span className="text-red-500 col-span-4">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* PASSWORD */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <div className="col-span-3 relative">
                <Input
                  id="password"
                  className="rounded-md"
                  placeholder="Enter Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? <FaEye /> : <IoEyeOff />}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 col-span-4">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="bg-black text-white rounded-xl hover:bg-black"
            >
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStaff;
