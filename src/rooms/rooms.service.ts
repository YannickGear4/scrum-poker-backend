// src/rooms/rooms.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './create-room.dto';
import { UpdateRoomDto } from './update-room.dto';

@Injectable()
export class RoomsService {
  private readonly rooms = []; // Ersetze dies mit einer echten DB-Logik.

  create(createRoomDto: CreateRoomDto) {
    const newRoom = { id: Date.now().toString(), ...createRoomDto };
    this.rooms.push(newRoom);
    return newRoom;
  }

  findAll() {
    return this.rooms;
  }

  findOne(id: string) {
    const room = this.rooms.find(room => room.id === id);
    if (!room) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }
    return room;
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    const roomIndex = this.rooms.findIndex(room => room.id === id);
    if (roomIndex === -1) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }
    const updatedRoom = { ...this.rooms[roomIndex], ...updateRoomDto };
    this.rooms[roomIndex] = updatedRoom;
    return updatedRoom;
  }

  remove(id: string) {
    const roomIndex = this.rooms.findIndex(room => room.id === id);
    if (roomIndex === -1) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }
    this.rooms.splice(roomIndex, 1);
  }
}
