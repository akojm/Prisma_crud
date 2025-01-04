'use server'

import { redirect } from "next/navigation";
import { prisma } from "../lib/db";
import { revalidatePath } from "next/cache";
// Create User //
export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const surname = formData.get('surname') as string;
  const phone = parseInt(formData.get('phone') as string);
  const email = formData.get('email') as string;

  await prisma.user.create({
    data: { name, surname, phone, email }
  });
  revalidatePath('/users');
  //redirect('/products');
}

// Get User //
export async function getUser(id: string) {
  return await prisma.user.findUnique({
    where: { id }
  });
}

// Update User //
export async function updateUser(formData: FormData) {
  const id = formData.get('id') as string;
  const name = formData.get('name') as string;
  const surname = formData.get('surname') as string;
  const phone = parseInt(formData.get('phone') as string);
  const email = formData.get('email') as string;

  await prisma.user.update({
    where: { id },
    data: { name, surname, phone, email }
  });
  //revalidatePath('/users');
  //redirect('/users');
}

// Delete User //
export async function deleteUser(formData: FormData) {
  const id = formData.get('id') as string;
  await prisma.user.delete({
    where: { id }
  });
  revalidatePath('/users');
  //redirect('/users');
}