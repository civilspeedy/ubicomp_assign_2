import * as SQL from 'expo-sqlite';

const database = SQL.openDatabase("database.db");


export async function createStreakScoreTable() {
    database.transaction((trans) => {
        trans.executeSql("CREATE TABLE IF NOT EXISTS streak_Score (streak INTEGER, score INTEGER)",
            null,
            () => { console.log("Database up"); },
            (e) => { console.error("err in createSteakScoreTable ", e); }
        );
    })
};

export async function resetStreakScore() {
    database.transaction((trans) => {
        trans.executeSql("INSERT INTO streak_score (streak, score) values (?, ?)",
            [0, 0],
            () => { console.log("streak and score have been set to 0") },
            (e) => { console.error("err in resetStreakScore ", e) }
        );
    })
};

export async function updateStreak(streak) {
    database.transaction((trans) => {
        trans.executeSql("UPDATE streak_score SET streak=?",
            streak,
            () => { console.log("Streak in db is now ", streak) },
            (e) => { console.error("err in updateStreak ", e) }
        );
    });
};

export async function updateScore(score) {
    database.transaction((trans) => {
        trans.executeSql("UPDATE streak_score SET score=?",
            score,
            () => { console.log("score in db is now ", score) },
            (e) => { console.error("err in updateScore ", e) }
        );
    })
};

export async function getStreak() {
    database.transaction((trans) => {
        trans.executeSql("SELECT streak FROM streak_score",
            null,
            (_, { rows: { _array } }) => { console.log("got streak from db ", _array) }
        )

    })
}