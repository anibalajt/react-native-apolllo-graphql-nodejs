import mongoose from 'mongoose';
import validate from 'mongoose-validator';

const userSchema = mongoose.Schema({
  // username: {
  //   type: String,
  //   unique: true,
  //   // required: [true, "El campo usuario es requerido"],
  //   validate: [
  //     validate({
  //       validator: 'isLength',
  //       arguments: [6,15],
  //       message: 'El nombre de usuario debe contener entre {ARGS[0]} y {ARGS[1]}'
  //     }),
  //     validate({
  //       validator: 'isAlphanumeric',
  //       message: 'El nombre de usuario debe ser alfanumerico'
  //     })
  //   ]
  // },
  password: String,
  fullname: String,
  email: {
    type: String,
    unique: true,
    required: [true, "El campo email es requerido"],
    validate: validate({
      validator: 'isEmail',
      message: 'Introduce un email válido'
    })
  },
  thumbnail: "String"
})

const userModel = mongoose.model('User', userSchema)

export default userModel;
