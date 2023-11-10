import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const breackfastCategory = await prisma.category.upsert({
    where: { name: 'Breakfast' },
    update: {},
    create: {
      name: 'Breakfast',
    },
  });

  const eggsAndToastsDish = await prisma.dish.upsert({
    where: { name: 'Eggs and Toasts' },
    update: {},
    create: {
      name: 'Eggs and Toasts',
      instructions: `Toast the Bread:
        Toast the slices of whole-grain bread to your desired level of crispiness.

        Scramble the Eggs:
        In a bowl, whisk the eggs and season with salt and pepper.
        Heat butter in a pan over medium heat.
        Pour the whisked eggs into the pan and gently scramble until just set.

        Assemble:
        Spread the mashed avocado evenly over the toasted bread slices.
        Spoon the fluffy scrambled eggs on top of the avocado-covered toasts.`,
      rating: 'EXCELLENT',
      category: {
        connect: { id: breackfastCategory.id },
      },
    },
  });

  const breadIngredient = await prisma.ingredient.upsert({
    where: { name: 'Bread' },
    update: {},
    create: {
      name: 'Bread',
      description:
        'Golden honey, a sweet nectar kissed by sunlight, imparts a subtle floral essence to your bread, elevating each bite with a delicate touch of natural sweetness.',
      dishes: {
        connect: { id: eggsAndToastsDish.id },
      },
      category: {
        connect: { id: breackfastCategory.id },
      },
    },
  });

  const eggIngredient = await prisma.ingredient.upsert({
    where: { name: 'Egg' },
    update: {},
    create: {
      name: 'Egg',
      description:
        'A versatile culinary cornerstone, eggs serve as a protein-packed ingredient, offering structure, moisture, and emulsification in a wide array of dishes. Whether scrambled, fried, or incorporated into recipes, their inherent richness elevates both taste and texture.',
      dishes: {
        connect: { id: eggsAndToastsDish.id },
      },
      category: {
        connect: { id: breackfastCategory.id },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
