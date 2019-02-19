/* @flow */
/** @jsx node */

import { node, type ComponentNode } from 'jsx-pragmatic/src';

import { SVGLogo, type SVGLogoProps } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';

export function BancontactLogo({ logoColor } : { logoColor : $Values<typeof LOGO_COLOR> }) : ComponentNode<SVGLogoProps> {

    return (
        <SVGLogo

            name={ LOGO.BANCONTACT }
            logoColor={ logoColor }
            render={ () => {
                return (
                    <svg version="1.1" id="Layer_1" x="0px" y="0px" width="226px" height="32px" viewBox="36.09922790527344 36.68461608886719 226 32" style="enable-background:new 0 0 476.9 123.4;" xmlns="http://www.w3.org/2000/svg">
                        <g transform="matrix(0.557769, 0, 0, 0.557769, 15.684875, 18.15871)">
                            <path fill="#005498" d="M147.6,50.2h-5.8h-26.9h-5.8l-3.9,4.4L92.5,68.9l0,0l-3.9,4.4h-6H56.2h-5.8l3.9-4.5l1.8-2.1l3.9-4.5h-5.8h-7.6&#10;&#9;&#9;h-4.2c-3.2,0-5.8,2.7-5.8,6l0,0v11.5v1.1c0,3.3,2.6,6,5.8,6H44h61.1h4.4c3.2,0,7.6-2,9.7-4.4l10.2-11.6L147.6,50.2z" />
                            <path fill="#FFD800" d="M155.3,36.8c3.2,0,5.8,2.7,5.8,6v12.6c0,3.3-2.6,6-5.8,6h-3.2h-8.5h-5.8l3.9-4.4l0,0l1.9-2.2l3.9-4.4h-38.6&#10;&#9;&#9;L88.3,73.6H50l27.5-31.1l1-1.2c2.2-2.4,6.5-4.4,9.7-4.4h1.4h65.7V36.8z" />
                            <path fill="#005498" d="M 440.7 85.6 L 440.7 81.8 C 440.7 81.3 440.4 81 439.7 81 L 437.3 81 C 436.6 81 436.1 80.9 436 80.6 C 435.8 80.3 435.8 79.7 435.8 78.7 L 435.8 64.7 L 439.7 64.7 C 440 64.7 440.2 64.6 440.4 64.4 C 440.6 64.2 440.7 64 440.7 63.7 L 440.7 59.8 C 440.7 59.5 440.6 59.3 440.4 59.1 C 440.2 58.9 440 58.8 439.7 58.8 L 435.8 58.8 L 435.8 53.8 C 435.8 53.5 435.7 53.3 435.6 53.2 C 435.4 53.1 435.2 53 435 53 L 434.9 53 L 429.1 54 C 428.8 54.1 428.6 54.2 428.4 54.3 C 428.2 54.5 428.1 54.7 428.1 54.9 L 428.1 58.8 L 424.2 58.8 C 423.9 58.8 423.7 58.9 423.5 59.1 C 423.3 59.3 423.2 59.5 423.2 59.8 L 423.2 63 C 423.2 63.3 423.3 63.5 423.5 63.6 C 423.7 63.8 423.9 63.9 424.2 64 L 428.1 64.6 L 428.1 78.6 C 428.1 80.3 428.3 81.7 428.6 82.8 C 429 83.9 429.5 84.7 430.1 85.3 C 430.8 85.9 431.6 86.3 432.6 86.5 C 433.6 86.7 434.8 86.8 436.1 86.8 C 436.8 86.8 437.4 86.8 438 86.7 C 438.5 86.6 439.2 86.5 439.9 86.4 C 440.4 86.4 440.7 86.1 440.7 85.6 M 419.9 85.1 L 419.9 80.8 C 419.9 80.5 419.8 80.3 419.6 80.2 C 419.4 80.1 419.2 80 418.9 80 L 418.8 80 C 417.9 80.1 417 80.2 416.2 80.2 C 415.4 80.3 414.3 80.3 412.9 80.3 C 412.4 80.3 411.8 80.2 411.4 80 C 410.9 79.8 410.5 79.5 410.1 79.1 C 409.7 78.7 409.5 78.1 409.3 77.4 C 409.1 76.7 409 75.8 409 74.7 L 409 70.7 C 409 69.6 409.1 68.7 409.3 68 C 409.5 67.3 409.8 66.7 410.1 66.3 C 410.5 65.9 410.9 65.6 411.4 65.4 C 411.9 65.2 412.4 65.1 412.9 65.1 C 414.3 65.1 415.4 65.1 416.2 65.2 C 417 65.3 417.9 65.3 418.8 65.4 L 418.9 65.4 C 419.2 65.4 419.4 65.3 419.6 65.2 C 419.8 65.1 419.9 64.9 419.9 64.6 L 419.9 60.3 C 419.9 59.9 419.8 59.7 419.7 59.6 C 419.5 59.5 419.3 59.3 418.9 59.2 C 418.2 59 417.3 58.9 416.3 58.7 C 415.2 58.5 414 58.5 412.5 58.5 C 409.1 58.5 406.4 59.5 404.3 61.6 C 402.3 63.7 401.2 66.7 401.2 70.7 L 401.2 74.7 C 401.2 78.6 402.2 81.7 404.3 83.8 C 406.3 85.9 409.1 86.9 412.5 86.9 C 413.9 86.9 415.2 86.8 416.3 86.7 C 417.4 86.5 418.3 86.4 418.9 86.2 C 419.3 86.1 419.5 86 419.7 85.8 C 419.8 85.7 419.9 85.4 419.9 85.1 M 388.6 80 C 388 80.3 387.4 80.5 386.7 80.7 C 386 80.9 385.3 81 384.6 81 C 383.6 81 382.8 80.9 382.3 80.6 C 381.8 80.3 381.6 79.7 381.6 78.6 L 381.6 78.2 C 381.6 77.6 381.7 77.1 381.8 76.7 C 381.9 76.3 382.2 75.9 382.5 75.6 C 382.8 75.3 383.3 75.1 383.8 74.9 C 384.3 74.8 385 74.7 385.9 74.7 L 388.6 74.7 L 388.6 80 L 388.6 80 Z M 396.2 68.3 C 396.2 66.5 395.9 65 395.4 63.8 C 394.9 62.6 394.1 61.6 393.2 60.8 C 392.2 60 391.1 59.4 389.7 59.1 C 388.3 58.7 386.7 58.5 385 58.5 C 383.4 58.5 381.8 58.6 380.3 58.8 C 378.8 59 377.6 59.2 376.7 59.5 C 376.1 59.7 375.8 60 375.8 60.6 L 375.8 64.5 C 375.8 64.8 375.9 65 376 65.2 C 376.2 65.3 376.4 65.4 376.6 65.4 L 376.8 65.4 C 377.2 65.4 377.7 65.3 378.2 65.3 C 378.8 65.3 379.4 65.2 380.2 65.2 C 380.9 65.2 381.7 65.1 382.5 65.1 C 383.3 65.1 384.1 65.1 384.8 65.1 C 385.9 65.1 386.8 65.3 387.4 65.7 C 388 66.1 388.4 67 388.4 68.4 L 388.4 70.1 L 385.8 70.1 C 381.7 70.1 378.6 70.7 376.8 72 C 375 73.3 374 75.4 374 78.2 L 374 78.6 C 374 80.2 374.2 81.5 374.7 82.5 C 375.2 83.6 375.8 84.4 376.6 85.1 C 377.4 85.7 378.2 86.2 379.2 86.5 C 380.2 86.8 381.2 86.9 382.3 86.9 C 383.7 86.9 385 86.7 386 86.3 C 387 85.9 388 85.4 389 84.7 L 389 85.5 C 389 85.8 389.1 86 389.3 86.2 C 389.5 86.4 389.7 86.5 390 86.5 L 395.4 86.5 C 395.7 86.5 395.9 86.4 396.1 86.2 C 396.3 86 396.4 85.8 396.4 85.5 L 396.4 68.3 L 396.2 68.3 Z M 370.5 85.6 L 370.5 81.8 C 370.5 81.3 370.2 81 369.5 81 L 367.1 81 C 366.4 81 365.9 80.9 365.8 80.6 C 365.6 80.3 365.6 79.7 365.6 78.7 L 365.6 64.7 L 369.5 64.7 C 369.8 64.7 370 64.6 370.2 64.4 C 370.4 64.2 370.5 64 370.5 63.7 L 370.5 59.8 C 370.5 59.5 370.4 59.3 370.2 59.1 C 370 58.9 369.8 58.8 369.5 58.8 L 365.6 58.8 L 365.6 53.8 C 365.6 53.5 365.5 53.3 365.4 53.2 C 365.2 53.1 365 53 364.8 53 L 364.7 53 L 358.9 54 C 358.6 54.1 358.4 54.2 358.2 54.3 C 358 54.5 357.9 54.7 357.9 54.9 L 357.9 58.8 L 354 58.8 C 353.7 58.8 353.5 58.9 353.3 59.1 C 353.1 59.3 353 59.5 353 59.8 L 353 63 C 353 63.3 353.1 63.5 353.3 63.6 C 353.5 63.8 353.7 63.9 354 64 L 357.9 64.6 L 357.9 78.6 C 357.9 80.3 358.1 81.7 358.4 82.8 C 358.8 83.9 359.3 84.7 359.9 85.3 C 360.6 85.9 361.4 86.3 362.4 86.5 C 363.4 86.7 364.6 86.8 365.9 86.8 C 366.6 86.8 367.2 86.8 367.8 86.7 C 368.3 86.6 369 86.5 369.7 86.4 C 370.2 86.4 370.5 86.1 370.5 85.6 M 349.5 85.5 L 349.5 69.5 C 349.5 68 349.4 66.6 349.1 65.2 C 348.9 63.9 348.4 62.7 347.8 61.7 C 347.2 60.7 346.3 59.9 345.2 59.4 C 344.1 58.8 342.7 58.5 340.9 58.5 C 339.4 58.5 338 58.7 336.8 59.1 C 335.6 59.5 334.4 60.1 333 61.1 L 333 59.8 C 333 59.5 332.9 59.3 332.7 59.1 C 332.5 58.9 332.3 58.8 332 58.8 L 326.6 58.8 C 326.3 58.8 326.1 58.9 325.9 59.1 C 325.7 59.3 325.6 59.5 325.6 59.8 L 325.6 85.4 C 325.6 85.7 325.7 85.9 325.9 86.1 C 326.1 86.3 326.3 86.4 326.6 86.4 L 332.4 86.4 C 332.7 86.4 332.9 86.3 333.1 86.1 C 333.3 85.9 333.4 85.7 333.4 85.4 L 333.4 66.5 C 334.2 66.1 335 65.7 335.8 65.4 C 336.5 65.1 337.3 65 338 65 C 338.7 65 339.3 65.1 339.8 65.2 C 340.3 65.3 340.6 65.6 340.9 65.9 C 341.2 66.3 341.3 66.7 341.4 67.3 C 341.5 67.9 341.5 68.6 341.5 69.4 L 341.5 85.4 C 341.5 85.7 341.6 85.9 341.8 86.1 C 342 86.3 342.2 86.4 342.5 86.4 L 348.3 86.4 C 348.6 86.4 348.8 86.3 349 86.1 C 349.4 85.9 349.5 85.7 349.5 85.5 M 313.1 74.4 C 313.1 78.3 311.7 80.3 308.8 80.3 C 307.4 80.3 306.3 79.8 305.6 78.8 C 304.9 77.8 304.5 76.3 304.5 74.4 L 304.5 71 C 304.5 69 304.9 67.6 305.6 66.6 C 306.3 65.6 307.4 65.1 308.8 65.1 C 311.6 65.1 313.1 67.1 313.1 71 L 313.1 74.4 Z M 320.9 71 C 320.9 69.1 320.6 67.3 320.1 65.8 C 319.6 64.3 318.8 63 317.8 61.9 C 316.8 60.8 315.5 60 314 59.4 C 312.5 58.8 310.8 58.5 308.8 58.5 C 306.8 58.5 305.1 58.8 303.6 59.4 C 302.1 60 300.8 60.8 299.8 61.9 C 298.8 63 298 64.3 297.5 65.8 C 297 67.3 296.7 69.1 296.7 71 L 296.7 74.4 C 296.7 76.3 297 78.1 297.5 79.6 C 298 81.1 298.8 82.4 299.8 83.5 C 300.8 84.6 302.1 85.4 303.6 86 C 305.1 86.6 306.8 86.9 308.8 86.9 C 310.8 86.9 312.5 86.6 314 86 C 315.5 85.4 316.8 84.6 317.8 83.5 C 318.8 82.4 319.6 81.1 320.1 79.6 C 320.6 78.1 320.9 76.3 320.9 74.4 L 320.9 71 Z M 294.1 85.1 L 294.1 80.8 C 294.1 80.5 294 80.3 293.8 80.2 C 293.6 80.1 293.4 80 293.1 80 L 293 80 C 292.1 80.1 291.2 80.2 290.4 80.2 C 289.6 80.2 288.5 80.3 287.1 80.3 C 286.6 80.3 286 80.2 285.6 80 C 285.1 79.8 284.7 79.5 284.3 79.1 C 283.9 78.7 283.7 78.1 283.5 77.4 C 283.3 76.7 283.2 75.8 283.2 74.7 L 283.2 70.7 C 283.2 69.6 283.3 68.7 283.5 68 C 283.7 67.3 284 66.7 284.3 66.3 C 284.7 65.9 285.1 65.6 285.6 65.4 C 286.1 65.2 286.6 65.1 287.1 65.1 C 288.5 65.1 289.6 65.1 290.4 65.2 C 291.2 65.3 292.1 65.3 293 65.4 L 293.1 65.4 C 293.4 65.4 293.6 65.3 293.8 65.2 C 294 65.1 294.1 64.9 294.1 64.6 L 294.1 60.3 C 294.1 59.9 294 59.7 293.9 59.6 C 293.7 59.5 293.5 59.3 293.1 59.2 C 292.4 59 291.6 58.9 290.5 58.7 C 289.4 58.5 288.2 58.5 286.7 58.5 C 283.3 58.5 280.6 59.5 278.5 61.6 C 276.5 63.7 275.4 66.7 275.4 70.7 L 275.4 74.7 C 275.4 78.6 276.4 81.7 278.5 83.8 C 280.5 85.9 283.3 86.9 286.7 86.9 C 288.1 86.9 289.4 86.8 290.5 86.7 C 291.6 86.5 292.4 86.4 293.1 86.2 C 293.5 86.1 293.7 86 293.9 85.8 C 294 85.7 294.1 85.4 294.1 85.1 M 270.4 85.5 L 270.4 69.5 C 270.4 68 270.3 66.6 270 65.2 C 269.7 63.8 269.3 62.7 268.7 61.7 C 268.1 60.7 267.2 59.9 266.1 59.4 C 265 58.8 263.6 58.5 261.8 58.5 C 260.3 58.5 258.9 58.7 257.7 59.1 C 256.5 59.5 255.3 60.1 253.9 61.1 L 253.9 59.8 C 253.9 59.5 253.8 59.3 253.6 59.1 C 253.4 58.9 253.2 58.8 252.9 58.8 L 247.5 58.8 C 247.2 58.8 247 58.9 246.8 59.1 C 246.6 59.3 246.5 59.5 246.5 59.8 L 246.5 85.4 C 246.5 85.7 246.6 85.9 246.8 86.1 C 247 86.3 247.2 86.4 247.5 86.4 L 253.3 86.4 C 253.6 86.4 253.8 86.3 254 86.1 C 254.2 85.9 254.3 85.7 254.3 85.4 L 254.3 66.5 C 255.1 66.1 255.9 65.7 256.7 65.4 C 257.4 65.1 258.2 65 258.9 65 C 259.6 65 260.2 65.1 260.7 65.2 C 261.2 65.3 261.5 65.6 261.8 65.9 C 262.1 66.3 262.2 66.7 262.3 67.3 C 262.4 67.9 262.4 68.6 262.4 69.4 L 262.4 85.4 C 262.4 85.7 262.5 85.9 262.7 86.1 C 262.9 86.3 263.1 86.4 263.4 86.4 L 269.2 86.4 C 269.5 86.4 269.7 86.3 269.9 86.1 C 270.3 85.9 270.4 85.7 270.4 85.5 M 233.3 80 C 232.7 80.3 232.1 80.5 231.4 80.7 C 230.7 80.9 230 81 229.3 81 C 228.3 81 227.5 80.9 227 80.6 C 226.5 80.3 226.3 79.7 226.3 78.6 L 226.3 78.2 C 226.3 77.6 226.4 77.1 226.5 76.7 C 226.6 76.3 226.9 75.9 227.2 75.6 C 227.5 75.3 228 75.1 228.5 74.9 C 229 74.8 229.7 74.7 230.6 74.7 L 233.3 74.7 L 233.3 80 L 233.3 80 Z M 241 68.3 C 241 66.5 240.7 65 240.2 63.8 C 239.7 62.6 238.9 61.6 238 60.8 C 237 60 235.9 59.4 234.5 59.1 C 233.1 58.7 231.5 58.5 229.8 58.5 C 228.2 58.5 226.6 58.6 225.1 58.8 C 223.6 59 222.4 59.2 221.5 59.5 C 220.9 59.7 220.6 60 220.6 60.6 L 220.6 64.5 C 220.6 64.8 220.7 65 220.8 65.2 C 221 65.3 221.2 65.4 221.4 65.4 L 221.6 65.4 C 222 65.4 222.5 65.3 223 65.3 C 223.6 65.3 224.2 65.2 225 65.2 C 225.7 65.2 226.5 65.1 227.3 65.1 C 228.1 65.1 228.9 65.1 229.6 65.1 C 230.7 65.1 231.6 65.3 232.2 65.7 C 232.8 66.1 233.2 67 233.2 68.4 L 233.2 70.1 L 230.6 70.1 C 226.5 70.1 223.4 70.7 221.6 72 C 219.8 73.3 218.8 75.4 218.8 78.2 L 218.8 78.6 C 218.8 80.2 219 81.5 219.5 82.5 C 220 83.6 220.6 84.4 221.4 85.1 C 222.2 85.7 223 86.2 224 86.5 C 225 86.8 226 86.9 227.1 86.9 C 228.5 86.9 229.8 86.7 230.8 86.3 C 231.8 85.9 232.8 85.4 233.8 84.7 L 233.8 85.5 C 233.8 85.8 233.9 86 234.1 86.2 C 234.3 86.4 234.5 86.5 234.8 86.5 L 240.2 86.5 C 240.5 86.5 240.7 86.4 240.9 86.2 C 241.1 86 241.2 85.8 241.2 85.5 L 241.2 68.3 L 241 68.3 Z M 206.6 75.9 C 206.6 77.2 206.1 78.3 205.2 79 C 204.3 79.7 202.5 80.1 200.1 80.1 L 199.3 80.1 C 198.9 80.1 198.5 80.1 198.1 80.1 C 197.7 80.1 197.3 80.1 196.9 80.1 L 196.1 80.1 L 196.1 71.1 L 201.5 71.1 C 203.4 71.1 204.8 71.5 205.5 72.4 C 206.2 73.3 206.6 74.3 206.6 75.4 L 206.6 75.9 Z M 206.4 61.6 C 206.4 62.1 206.3 62.6 206.2 63.1 C 206 63.6 205.8 64 205.4 64.3 C 205 64.6 204.5 64.9 203.9 65.1 C 203.3 65.3 202.5 65.4 201.5 65.4 L 196.1 65.4 L 196.1 57.1 C 196.3 57.1 196.5 57.1 196.8 57.1 C 197.1 57.1 197.5 57.1 197.9 57.1 L 199 57.1 L 199.8 57.1 C 202.3 57.1 204 57.4 205 58 C 206 58.6 206.5 59.6 206.5 60.9 L 206.5 61.6 L 206.4 61.6 Z M 214.6 75.4 C 214.6 73.7 214.2 72.3 213.4 71.1 C 212.6 69.9 211.6 68.9 210.3 68.3 C 211.6 67.7 212.6 66.7 213.3 65.5 C 214 64.2 214.4 62.8 214.4 61.3 L 214.4 60.4 C 214.4 58.5 214 56.9 213.3 55.6 C 212.6 54.3 211.5 53.3 210.2 52.5 C 208.9 51.7 207.3 51.2 205.4 50.8 C 203.5 50.5 201.5 50.3 199.2 50.3 C 198.4 50.3 197.6 50.3 196.8 50.3 C 196 50.3 195.2 50.4 194.4 50.4 C 193.6 50.4 192.9 50.5 192.2 50.6 C 191.5 50.7 191 50.7 190.6 50.8 C 189.7 51 189 51.3 188.6 51.7 C 188.2 52.1 188 52.9 188 54 L 188 83.3 C 188 84.4 188.2 85.1 188.6 85.6 C 189 86 189.7 86.3 190.6 86.5 C 191.1 86.6 191.7 86.7 192.3 86.7 C 193 86.8 193.7 86.8 194.5 86.9 C 195.3 86.9 196.1 87 196.9 87 C 197.7 87 198.6 87 199.4 87 C 201.5 87 203.5 86.8 205.3 86.5 C 207.1 86.2 208.7 85.6 210.1 84.8 C 211.5 84 212.5 82.9 213.4 81.5 C 214.2 80.1 214.6 78.3 214.6 76.2 L 214.6 75.4 L 214.6 75.4 Z" />
                        </g>
                    </svg>
                );
            } }
        />
    );
}
