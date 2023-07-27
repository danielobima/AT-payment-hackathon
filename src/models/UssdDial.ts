import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Organisation from "./Organisation";
import { InferAttributes } from "sequelize";

@Table({
  underscored: true,
  tableName: "ussd_dials",
})
class UssdDial extends Model<InferAttributes<UssdDial>> {
  @Column({
    primaryKey: true,
    type: DataType.STRING,
  })
  declare SessionID: string;

  @Column({
    type: DataType.STRING,
  })
  declare PhoneNumber: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare StepNumber: number;

  @ForeignKey(() => Organisation)
  declare OrganisationID: number;

  @BelongsTo(() => Organisation)
  declare SelectedOrganisation: Organisation;

  @Column({
    type: DataType.FLOAT,
  })
  declare Amount: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare IsRequestProcessed: boolean;

  // You can add more relevant columns if needed, e.g., timestamps for each step, timestamps for when the request was processed, etc.
}

export default UssdDial;
