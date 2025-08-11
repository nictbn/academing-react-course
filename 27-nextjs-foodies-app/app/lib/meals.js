import sql from 'better-sqlite3';

const db = sql('meals.db');

// async is just for demo purposes, the driver is not async
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Uncomment to simulate an error
    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}