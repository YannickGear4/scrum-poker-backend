import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './create-room.dto';
import { UpdateRoomDto } from './update-room.dto';

@Controller('rooms')
export class RoomsController {

    constructor(private readonly roomsService: RoomsService) {}

    @Post()
        create(@Body() createRoomDto: CreateRoomDto) {
        return this.roomsService.create(createRoomDto);
    }

    @Get(':id')
        findOne(@Param('id') id: string) {
        return this.roomsService.findOne(id);
    }


     @Get()
        findAll() {
        return this.roomsService.findAll();
    }

    @Put(':id')
        update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
        return this.roomsService.update(id, updateRoomDto);
    }

    @Delete(':id')
        remove(@Param('id') id: string) {
        return this.roomsService.remove(id);
    }




  




}
