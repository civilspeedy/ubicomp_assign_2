/**
 * fragments from https://brightspace.bournemouth.ac.uk/d2l/le/lessons/342479/topics/1956265 pages 94 to 98
 * @file contains functions for executing SQL queries
 * @module DatabaseManipulation
 */

import * as SQL from 'expo-sqlite';

const database = SQL.openDatabase('database.db');

/**
 * Creates new table for hosting task data for one does not exist already
 */
export async function createTaskTable() {
  database.transaction((trans) => {
    trans.executeSql(
      `CREATE TABLE IF NOT EXISTS 
    tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR, 
      format VARCHAR, page_count INTEGER, slide_count INTEGER, 
      word_count INTEGER, start_date DATE, due DATE, 
      subject VARCHAR, done BOOL)`,
      null,
      () => console.log('tasks table up'),
      (e) => console.error('err in createTaskTable ', e)
    );
  });
}

/**
 * Create new table for storing the user's points if the table does not already exist
 */
export async function createPointsTable() {
  database.transaction((trans) => {
    trans.executeSql(
      'CREATE TABLE IF NOT EXISTS points (id INTEGER PRIMARY KEY AUTOINCREMENT, points INTEGER)',
      null,
      () => console.log('points table up'),
      (e) => console.error('err in createPointsTable ', e)
    );
  });
}

/**
 * Adds points value to points table
 * @param {number} points - value representing the points gained by the user
 */
export async function addPoints(points) {
  database.transaction((trans) => {
    trans.executeSql(
      'INSERT INTO points (points) VALUES (?)',
      [points],
      () => console.log('points added'),
      (e) => console.error('err in addPoints ', e)
    );
  });
}

/**
 * updates the points value in the points table
 * @param {number} points - value representing the points gained by the user
 */
export async function updatePoints(points) {
  try {
    database.transaction((trans) => {
      trans.executeSql(
        'UPDATE points SET points = ? WHERE id = 1',
        [points],
        () => {
          console.log('points are now ', points);
        },
        (e) => {
          console.error('err in updatePoints ', e);
        }
      );
    });
  } catch (e) {
    console.error('transaction could not take place ', e);
  }
}

/**
 * Gets points value from points table
 * @returns {Array} - the user's points
 */
export async function getPoints() {
  return new Promise((resolve, reject) => {
    database.transaction((trans) => {
      trans.executeSql(
        'SELECT points FROM points WHERE id = 1',
        null,
        (_, { rows: { _array } }) => {
          console.log('Got points from db', _array);
          resolve(_array);
        },
        (e) => {
          console.error('err in getTasks', e);
          reject(e);
        }
      );
    });
  });
}

/**
 * Adds a task to the tasks table
 * @param {object} task - a single object hosting details relating to a task
 */
export async function addTask(task) {
  try {
    database.transaction((trans) => {
      trans.executeSql(
        `INSERT INTO tasks 
        (title, format, page_count, slide_count, word_count, start_date, due, subject, done) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,

        [
          task._title,
          task._type,
          task._maxPages,
          task._maxSlides,
          task._maxWords,
          task._startDate,
          task._dueDate,
          task._subject,
          task.done,
        ],

        (_) => console.log('Task added: ', task._title),
        (_, e) => console.error('err in addTask ', e)
      );
    });
  } catch (e) {
    console.error('Unable to excute SQL, table may not be made', e);
  }
}

/**
 * Deletes task off given name
 * @param {string} taskName - name of the task to be deleted
 */
export async function deleteTask(taskName) {
  try {
    database.transaction((trans) => {
      trans.executeSql(
        'DELETE FROM tasks WHERE title=?',
        [taskName],

        (_) => console.log('task deleted: ', taskName),
        (_, e) => console.error('err in deleteTask ', e)
      );
    });
  } catch (e) {
    console.error('Unable to excute SQL, table may not be made', e);
  }
}

/**
 * gets all tasks from tasks table
 * @returns {Array} - all tasks in table
 */
export async function getTasks() {
  return new Promise((resolve, reject) => {
    database.transaction((trans) => {
      trans.executeSql(
        'SELECT * FROM tasks',
        null,
        (_, { rows: { _array } }) => {
          console.log('Got tasks from db');
          resolve(_array);
        },
        (e) => {
          console.error('err in getTasks', e);
          reject(e);
        }
      );
    });
  });
}

/**
 * Updates a task with passed attributes using given name
 * @param {object} task - a single object hosting details relating to a task
 * @param {string} originalTitle - the original name of the task for identification if the user wishes to change the task's name
 */
export async function updateTask(task, originalTitle) {
  try {
    database.transaction((trans) => {
      trans.executeSql(
        `UPDATE tasks 
      SET format = ?, 
      title = ?,
      page_count = ?,
      slide_count = ?,
      word_count = ?,
      start_date = ?,
      due = ?,
      subject = ?
      WHERE title = ?`,
        [
          task._format,
          task._title,
          task._pageCount,
          task._slideCount,
          task._wordCount,
          task._startDate,
          task._dueDate,
          task._subject,
          originalTitle,
        ],
        (_) => console.log('task updated'),
        (_, e) => console.error('err in updateTask ', e)
      );
    });
  } catch (e) {
    console.error(e);
  }
}

/**
 * Updates the 'done' attribute of a given task in the tasks table
 * @param {object} task - a single object hosting details relating to a task
 * @param {boolean} isDone - a boolean representing whether a task has been completed
 */
export async function setTaskDone(task, isDone) {
  try {
    database.transaction((trans) => {
      trans.executeSql('UPDATE tasks SET done = ? WHERE title = ?', [isDone, task.title], (_) =>
        console.log(task.title, ' set to done')
      ),
        (_, e) => console.error('err in setTaskToDone ', e);
    });
  } catch (e) {
    console.error(e);
  }
}
