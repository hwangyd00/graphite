/*
 * Copyright (c) 2012-2015 S-Core Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Introduction
 * @since 1.0.0
 * @author hw.shim@samsung.com
 */

define([
    'external/dom/dom',
    'external/genetic/genetic',
    'graphite/base/Base'
], function (
    dom,
    genetic,
    Base
) {
    'use strict';

    /**
     * A EventReceiver.
     * @constructor
     */
    function EventReceiver() {
        Base.apply(this, arguments);
    }

    genetic.inherits(EventReceiver, Base, {

        /**
         * @param {Widget} widget
         */
        setRoot: function (widget) {
            this._root = widget;
        },

        /**
         * @return {Widget}
         */
        getRoot: function () {
            return this._root;
        },

        /**
         * Listens to the given container events.
         * @param {GraphicContainer} container
         */
        listen: function (container) {
            this.desc('listen', container);
            this.setContainer(container);
            var mask = container.getEventMask();
            dom.addEvent(mask, 'mousedown', function (e) {
                console.log('mousedown');
            });
        },

        /**
         * Sets container.
         * @param {GraphicContainer} container
         */
        setContainer: function (container) {
            this._container = container;
        },

        /**
         * Returns container.
         * @return {GraphicContainer}
         */
        getContainer: function () {
            return this._container;
        }
    });

    return EventReceiver;
});
