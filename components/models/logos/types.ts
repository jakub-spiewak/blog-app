import {RefObject} from "react";
import {Group} from "three";

export interface HasRef {
    ref: RefObject<Group>
}