import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
    create(createUserDto: CreateUserDto) {
        const { password } = createUserDto;
        return this.validatePassword(password);
    }

    findAll() {
        return `This action returns all user`;
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }

    validatePassword(password: any) {
        const minLength = /.{8,}/;
        const hasUpperCase = /[A-Z]/;
        const hasLowerCase = /[a-z]/;
        const hasDigit = /\d/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (!minLength.test(password)) {
            return 'A senha deve ter pelo menos 8 caracteres.';
        }
        if (!hasUpperCase.test(password)) {
            return 'A senha deve conter pelo menos uma letra maiúscula.';
        }
        if (!hasLowerCase.test(password)) {
            return 'A senha deve conter pelo menos uma letra minúscula.';
        }
        if (!hasDigit.test(password)) {
            return 'A senha deve conter pelo menos um dígito numérico.';
        }
        if (!hasSpecialChar.test(password)) {
            return 'A senha deve conter pelo menos um caractere especial.';
        }
        return  {
            status: 200,  
            message: 'A senha é válida!'
        };
    }
}
