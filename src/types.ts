import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as ServerIOServer } from "socket.io";
import { User , Member , Server } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { user: User })[];
}

export type NextApiResponseWithSocket = NextApiResponse & {
  socket: Socket &{
    server: NetServer & {
      io:ServerIOServer;
    };
  };
}
