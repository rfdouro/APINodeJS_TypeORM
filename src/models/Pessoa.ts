import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("Pessoa")
export class Pessoa {
 @PrimaryGeneratedColumn({name: "id"})
 public id!: number;
 @Column({name: "nome", type: "varchar"})
 public nome?: string;
}