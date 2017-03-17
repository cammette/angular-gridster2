/// <reference path="../src/typings.d.ts" />
import { OnInit, ElementRef, OnDestroy } from '@angular/core';
import { GridsterConfig } from './gridsterConfig.interface';
import { GridsterItem } from './gridsterItem.interface';
export declare class GridsterComponent implements OnInit, OnDestroy {
    private el;
    options: GridsterConfig;
    detectScrollBarLayout: () => void;
    calculateLayoutDebounce: Function;
    onResizeFunction: EventListenerObject;
    movingItem: GridsterItem;
    previewStyle: Function;
    state: {
        element: HTMLElement;
        mobile: boolean;
        curWidth: number;
        curHeight: number;
        options: GridsterConfig;
        scrollBarPresent: boolean;
        grid: Array<GridsterItem>;
        columns: number;
        rows: number;
        curColWidth: number;
        curRowHeight: number;
    };
    private cleanCallback;
    constructor(el: ElementRef);
    ngOnInit(): void;
    optionsChanged(): void;
    ngOnDestroy(): void;
    onResize(): void;
    detectScrollBar(): void;
    setGridSize(): void;
    setGridDimensions(): void;
    calculateLayout(): void;
    addItem(item: GridsterItem): void;
    removeItem(item: GridsterItem): void;
    checkCollision(item: GridsterItem): GridsterItem;
    findItemWithItem(item: GridsterItem): GridsterItem;
    autoPositionItem(item: GridsterItem): void;
    pixelsToPosition(x: any, y: any): [number, number];
    checkCompactUp(): Boolean;
    moveUpTillCollision(item: GridsterItem): Boolean;
    checkCompactLeft(): Boolean;
    moveLeftTillCollision(item: GridsterItem): Boolean;
}
