/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";

import {Loading} from "@clr/angular";

const LATENCY = 2000;

@Directive({selector: "[clrFakeLoader]"})
export class FakeLoader implements OnInit {
    constructor(private template: TemplateRef<any>, private container: ViewContainerRef, private loading: Loading) {}

    @Input("clrFakeLoader") fake: boolean;

    ngOnInit() {
        if (this.fake) {
            this.loading.loading = true;
            setTimeout(() => {
                this.load();
                this.loading.loading = false;
            }, LATENCY);
        } else {
            this.load();
        }
    }

    private load() {
        this.container.createEmbeddedView(this.template);
    }
}
