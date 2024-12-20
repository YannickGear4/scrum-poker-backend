// src/rooms/dto/create-room.dto.ts
export class CreateRoomDto {
    readonly name: string;
    readonly description: string;
    readonly capacity: number;
  }
  
  // src/rooms/dto/update-room.dto.ts
  export class UpdateRoomDto {
    readonly name?: string;
    readonly description?: string;
    readonly capacity?: number;
  }
  