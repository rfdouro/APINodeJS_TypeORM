import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("Animal")
export class Animal {
 @PrimaryGeneratedColumn({name: "id"})
 public id!: number;
 @Column({name: "nome", type: "varchar"})
 public nome?: string;
}