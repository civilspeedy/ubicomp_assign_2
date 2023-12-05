import * as SQL from 'expo-sqlite';

const database = SQL.openDatabase("database.db");


export async function createStreakScoreTable() {
    database.transaction((trans) => {
        trans.executeSql(`CREATE TABLE IF NOT EXISTS streak_Score (streak INTEGER, score INTEGER);
        INSERT INTO streak_score (streak, score) values (?, ?);`,
            [0, 0],
            () => { console.log("Database up"); },
            (e) => { console.error("err in createSteakScoreTable ", e); }
        );
    })
};

export async function updateStreak(streak) {
    database.transaction(())
};