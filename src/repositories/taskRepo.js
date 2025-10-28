import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

export async function findById(id) {
  return prisma.task.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      completed: true
    }
  })
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
