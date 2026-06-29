"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const user_1 = require("../models/user");
const team_1 = require("../models/team");
const activity_1 = require("../models/activity");
const leaderboard_1 = require("../models/leaderboard");
const workout_1 = require("../models/workout");
const seed = async () => {
    console.log('Seed the octofit_db database with test data');
    await (0, database_1.connectDatabase)();
    await Promise.all([
        user_1.UserModel.deleteMany({}),
        team_1.TeamModel.deleteMany({}),
        activity_1.ActivityModel.deleteMany({}),
        leaderboard_1.LeaderboardModel.deleteMany({}),
        workout_1.WorkoutModel.deleteMany({}),
    ]);
    const users = await user_1.UserModel.insertMany([
        {
            name: 'Maya Lopez',
            email: 'maya.lopez@mergingtonhs.edu',
            gradeLevel: 9,
            fitnessGoal: 'Improve endurance',
            weeklyTargetMinutes: 150,
        },
        {
            name: 'Jordan Kim',
            email: 'jordan.kim@mergingtonhs.edu',
            gradeLevel: 10,
            fitnessGoal: 'Build strength',
            weeklyTargetMinutes: 180,
        },
        {
            name: 'Avery Patel',
            email: 'avery.patel@mergingtonhs.edu',
            gradeLevel: 11,
            fitnessGoal: 'Increase flexibility',
            weeklyTargetMinutes: 120,
        },
        {
            name: 'Noah Bennett',
            email: 'noah.bennett@mergingtonhs.edu',
            gradeLevel: 12,
            fitnessGoal: 'Improve sprint speed',
            weeklyTargetMinutes: 200,
        },
    ]);
    await team_1.TeamModel.insertMany([
        {
            name: 'Cardio Crushers',
            coachName: 'Paul Octo',
            memberIds: [users[0]._id, users[3]._id],
        },
        {
            name: 'Strength Squad',
            coachName: 'Paul Octo',
            memberIds: [users[1]._id, users[2]._id],
        },
    ]);
    await activity_1.ActivityModel.insertMany([
        {
            userId: users[0]._id,
            activityType: 'Running',
            durationMinutes: 35,
            caloriesBurned: 290,
            activityDate: new Date('2026-06-23T16:00:00.000Z'),
        },
        {
            userId: users[1]._id,
            activityType: 'Circuit training',
            durationMinutes: 45,
            caloriesBurned: 360,
            activityDate: new Date('2026-06-24T16:30:00.000Z'),
        },
        {
            userId: users[2]._id,
            activityType: 'Yoga',
            durationMinutes: 40,
            caloriesBurned: 180,
            activityDate: new Date('2026-06-24T17:00:00.000Z'),
        },
        {
            userId: users[3]._id,
            activityType: 'Sprints',
            durationMinutes: 30,
            caloriesBurned: 310,
            activityDate: new Date('2026-06-25T15:45:00.000Z'),
        },
    ]);
    await leaderboard_1.LeaderboardModel.insertMany([
        { period: '2026-06', userId: users[3]._id, points: 960, rank: 1 },
        { period: '2026-06', userId: users[1]._id, points: 870, rank: 2 },
        { period: '2026-06', userId: users[0]._id, points: 820, rank: 3 },
        { period: '2026-06', userId: users[2]._id, points: 760, rank: 4 },
    ]);
    await workout_1.WorkoutModel.insertMany([
        {
            title: 'After-School Endurance Run',
            focusArea: 'Cardio',
            difficulty: 'Intermediate',
            estimatedMinutes: 30,
            recommendedForGoal: 'Improve endurance',
        },
        {
            title: 'Bodyweight Strength Builder',
            focusArea: 'Strength',
            difficulty: 'Beginner',
            estimatedMinutes: 25,
            recommendedForGoal: 'Build strength',
        },
        {
            title: 'Mobility Reset Flow',
            focusArea: 'Flexibility',
            difficulty: 'Beginner',
            estimatedMinutes: 20,
            recommendedForGoal: 'Increase flexibility',
        },
        {
            title: 'Track Speed Session',
            focusArea: 'Speed',
            difficulty: 'Advanced',
            estimatedMinutes: 35,
            recommendedForGoal: 'Improve sprint speed',
        },
    ]);
    console.log('Seed completed successfully.');
};
seed()
    .then(() => {
    process.exit(0);
})
    .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
});
