#!(feature(proc_macro, wasm_custom_section, wasm_import_module))

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &srt);
}

#[wasm_bindgen]
pub fn run_alert(item: &str) {

}
