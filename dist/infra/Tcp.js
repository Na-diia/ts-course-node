"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tcp = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const routing_controllers_1 = require("routing-controllers");
const domain_1 = require("app/domain");
const middleware_1 = require("app/middleware");
class Tcp {
    constructor() {
        this.routePrefix = "/api";
        this.server = (0, express_1.default)();
        if (!Tcp.instance) {
            Tcp.instance = this;
        }
        return Tcp.instance;
    }
    ;
    async init() {
        const { server, routePrefix } = this;
        server.use(express_1.default.json());
        (0, routing_controllers_1.useExpressServer)(server, {
            routePrefix,
            controllers: domain_1.controllers,
            middlewares: middleware_1.middlewares,
            cors: true,
            defaultErrorHandler: true,
            validation: false
        });
        return new Promise((resolve) => {
            server.listen(4000, () => {
                console.log('Tcp service started on port 4000!');
                return resolve(true);
            });
        });
    }
}
exports.Tcp = Tcp;
//# sourceMappingURL=Tcp.js.map