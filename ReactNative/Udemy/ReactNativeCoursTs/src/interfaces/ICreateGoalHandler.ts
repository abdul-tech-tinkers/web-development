import { IGoal } from "./IGoal";

export interface ICreateGoalHandler{
    onGoalCreated: (goal:IGoal)=> void
    isCreateGoalModelVisible:boolean;
   }