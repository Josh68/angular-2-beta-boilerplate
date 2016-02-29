System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                    this.solved = false;
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    this.testVal = 'this is a test';
                    this.solved = false;
                    console.log(this.switch1Number);
                    console.log(this.switch2Number);
                    console.log(this.switch3Number);
                    console.log(this.switch4Number);
                };
                PuzzleComponent.prototype.testFunc = function () {
                    console.log(this.testVal);
                };
                PuzzleComponent.prototype.testSolvedCheck = function (formEl) {
                    this.solved = false;
                    console.log(formEl);
                    if (formEl.switch1 === this.switch1Number.toString()
                        && formEl.switch2 === this.switch2Number.toString()
                        && formEl.switch3 === this.switch3Number.toString()
                        && formEl.switch4 === this.switch4Number.toString()) {
                        this.solved = true;
                    }
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <form name=\"puzzleForm\" (keyup)=\"testSolvedCheck(puzzleForm.value)\" #puzzleForm=\"ngForm\">\n            <section class=\"setup box\">\n                <h2>Game Setup</h2>\n                <label for=\"name-input\">Enter your name please:</label>\n                <input name=\"name-input\" type=\"text\" #name (keyup)=\"0\">\n            </section>\n            <section class=\"game box\" \n                [ngClass]=\"{\n                    solved: solved\n                }\"\n                [ngStyle]=\"{\n                    display: name.value === '' ? 'none' : 'block'\n                }\">\n                <h2>The Puzzle | {{solved ? 'Solved' : 'Not solved'}}\n                </h2>\n                <p>OK, welcome <span class=\"name\">{{name.value}}</span></p>\n                <label for=\"switch1\">Switch 1:</label>\n                <input type=\"text\" name=\"switch1\" ngControl=\"switch1\" #switch1><br>\n                <label for=\"switch2\">Switch 2:</label>\n                <input type=\"text\" name=\"switch2\" ngControl=\"switch2\" #switch2><br>\n                <label for=\"switch3\">Switch 3:</label>\n                <input type=\"text\" name=\"switch3\" ngControl=\"switch3\" #switch3><br>\n                <label for=\"switch4\">Switch 4:</label>\n                <input type=\"text\" name=\"switch4\" ngControl=\"switch4\" #switch4><br>\n                <label for=\"test\">Test:</label>\n                <input type=\"text\" [(ngModel)]=\"testVal\" ngControl=\"testInput\" name=\"test\" (keyup)=\"testFunc()\">\n                <p>{{testVal}}</p>\n            </section>\n            <h2 class=\"congrats\"\n                [ngClass] = \"{\n                    solved: solved\n                }\"\n            >Congratulations, {{name.value}}, you did it!</h2>\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            })();
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlB1enpsZUNvbXBvbmVudCIsIlB1enpsZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlB1enpsZUNvbXBvbmVudC5uZ09uSW5pdCIsIlB1enpsZUNvbXBvbmVudC50ZXN0RnVuYyIsIlB1enpsZUNvbXBvbmVudC50ZXN0U29sdmVkQ2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQTZESUE7b0JBQ0lDLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO2dCQUN4QkEsQ0FBQ0E7Z0JBZkRELGtDQUFRQSxHQUFSQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQy9DQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDL0NBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLENBQUNBO29CQUMvQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQy9DQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxnQkFBZ0JBLENBQUNBO29CQUNoQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQUE7b0JBQ25CQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtvQkFDaENBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO29CQUNoQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2hDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtnQkFDcENBLENBQUNBO2dCQU1ERixrQ0FBUUEsR0FBUkE7b0JBQ0lHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUM5QkEsQ0FBQ0E7Z0JBRURILHlDQUFlQSxHQUFmQSxVQUFnQkEsTUFBTUE7b0JBQ2xCSSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDcEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUNwQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsS0FBS0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsRUFBRUE7MkJBQzdDQSxNQUFNQSxDQUFDQSxPQUFPQSxLQUFLQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxFQUFFQTsyQkFDaERBLE1BQU1BLENBQUNBLE9BQU9BLEtBQUtBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLEVBQUVBOzJCQUNoREEsTUFBTUEsQ0FBQ0EsT0FBT0EsS0FBS0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2xEQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDdkJBLENBQUNBO2dCQUNUQSxDQUFDQTtnQkE5RUxKO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsUUFBUUEsRUFBRUEsd3lEQW1DVEE7cUJBQ0pBLENBQUNBOztvQ0F5Q0RBO2dCQUFEQSxzQkFBQ0E7WUFBREEsQ0EvRUEsQUErRUNBLElBQUE7WUEvRUQsNkNBK0VDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1wdXp6bGUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8Zm9ybSBuYW1lPVwicHV6emxlRm9ybVwiIChrZXl1cCk9XCJ0ZXN0U29sdmVkQ2hlY2socHV6emxlRm9ybS52YWx1ZSlcIiAjcHV6emxlRm9ybT1cIm5nRm9ybVwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNldHVwIGJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkdhbWUgU2V0dXA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWUtaW5wdXRcIj5FbnRlciB5b3VyIG5hbWUgcGxlYXNlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWUtaW5wdXRcIiB0eXBlPVwidGV4dFwiICNuYW1lIChrZXl1cCk9XCIwXCI+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJnYW1lIGJveFwiIFxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgIHNvbHZlZDogc29sdmVkXHJcbiAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBuYW1lLnZhbHVlID09PSAnJyA/ICdub25lJyA6ICdibG9jaydcclxuICAgICAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgICAgIDxoMj5UaGUgUHV6emxlIHwge3tzb2x2ZWQgPyAnU29sdmVkJyA6ICdOb3Qgc29sdmVkJ319XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+T0ssIHdlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN3aXRjaDFcIj5Td2l0Y2ggMTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN3aXRjaDFcIiBuZ0NvbnRyb2w9XCJzd2l0Y2gxXCIgI3N3aXRjaDE+PGJyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN3aXRjaDJcIj5Td2l0Y2ggMjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN3aXRjaDJcIiBuZ0NvbnRyb2w9XCJzd2l0Y2gyXCIgI3N3aXRjaDI+PGJyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN3aXRjaDNcIj5Td2l0Y2ggMzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN3aXRjaDNcIiBuZ0NvbnRyb2w9XCJzd2l0Y2gzXCIgI3N3aXRjaDM+PGJyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN3aXRjaDRcIj5Td2l0Y2ggNDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN3aXRjaDRcIiBuZ0NvbnRyb2w9XCJzd2l0Y2g0XCIgI3N3aXRjaDQ+PGJyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRlc3RcIj5UZXN0OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInRlc3RWYWxcIiBuZ0NvbnRyb2w9XCJ0ZXN0SW5wdXRcIiBuYW1lPVwidGVzdFwiIChrZXl1cCk9XCJ0ZXN0RnVuYygpXCI+XHJcbiAgICAgICAgICAgICAgICA8cD57e3Rlc3RWYWx9fTwvcD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJjb25ncmF0c1wiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc10gPSBcIntcclxuICAgICAgICAgICAgICAgICAgICBzb2x2ZWQ6IHNvbHZlZFxyXG4gICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgID5Db25ncmF0dWxhdGlvbnMsIHt7bmFtZS52YWx1ZX19LCB5b3UgZGlkIGl0ITwvaDI+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFB1enpsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzd2l0Y2gxTnVtYmVyOiBudW1iZXI7IC8vdGhlc2UgYXJlIGFsbCBqdXN0IHR5cGUgZGVjbGFyYXRpb25zXHJcbiAgICBzd2l0Y2gyTnVtYmVyOiBudW1iZXI7XHJcbiAgICBzd2l0Y2gzTnVtYmVyOiBudW1iZXI7XHJcbiAgICBzd2l0Y2g0TnVtYmVyOiBudW1iZXI7XHJcbiAgICB0ZXN0VmFsOiBzdHJpbmc7XHJcbiAgICBzb2x2ZWQ6IGJvb2xlYW47XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3dpdGNoMU51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2gyTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLnN3aXRjaDNOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoNE51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy50ZXN0VmFsID0gJ3RoaXMgaXMgYSB0ZXN0JztcclxuICAgICAgICB0aGlzLnNvbHZlZCA9IGZhbHNlXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gxTnVtYmVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDJOdW1iZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoM051bWJlcik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2g0TnVtYmVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zb2x2ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGVzdEZ1bmMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50ZXN0VmFsKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGVzdFNvbHZlZENoZWNrKGZvcm1FbCkge1xyXG4gICAgICAgIHRoaXMuc29sdmVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybUVsKTtcclxuICAgICAgICBpZiAoZm9ybUVsLnN3aXRjaDEgPT09IHRoaXMuc3dpdGNoMU51bWJlci50b1N0cmluZygpXHJcbiAgICAgICAgICAgICYmIGZvcm1FbC5zd2l0Y2gyID09PSB0aGlzLnN3aXRjaDJOdW1iZXIudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAmJiBmb3JtRWwuc3dpdGNoMyA9PT0gdGhpcy5zd2l0Y2gzTnVtYmVyLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgJiYgZm9ybUVsLnN3aXRjaDQgPT09IHRoaXMuc3dpdGNoNE51bWJlci50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvbHZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
