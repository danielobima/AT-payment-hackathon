import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import UssdDial from "./UssdDial";

@Table({
  underscored: true,
  tableName: "organisations",
})
class Organisation extends Model<
  InferAttributes<Organisation>,
  InferCreationAttributes<Organisation>
> {
  @Column({
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  declare OrganisationID: CreationOptional<number>;

  @Column({
    type: DataType.STRING,
  })
  declare OrganisationName: string;

  @Column({
    type: DataType.STRING,
  })
  declare OrganisationEmail: string;

  @HasMany(() => UssdDial)
  declare Dials: UssdDial[];
}

export default Organisation;
