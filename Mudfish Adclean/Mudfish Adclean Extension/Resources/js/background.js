/*-
 * Copyright (c) 2023 Weongyo Jeong <weongyo@3rocks.net>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */

var g_conf = {
    mudfish_adclean_filter_on: true,
    mudfish_adclean_rules_generation: -1,
    mudfish_adclean_rules_generation_epoch: -1,
    mudfish_adclean_rules_generation_timestr: '',
};

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});

function rules_info() {
    var url = chrome.runtime.getURL('/res/rules.json');
    fetch(url).then(async function(resp) {
        var data = await resp.json();
        if (g_conf.mudfish_adclean_rules_generation == -1 ||
            g_conf.mudfish_adclean_rules_generation < data.generation) {
            g_conf.mudfish_adclean_rules_generation = data.generation;
            g_conf.mudfish_adclean_rules_generation_epoch = data.generation_epoch;
            g_conf.mudfish_adclean_rules_generation_timestr = data.generation_timestr;
            chrome.storage.local.set(g_conf);
        }
    });
}

(() => {
    chrome.storage.local.get(g_conf, function (items) {
        g_conf = items;
        rules_info();
    });
})();

