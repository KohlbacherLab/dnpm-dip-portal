# Changelog

## [1.18.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.17.0...v1.18.0) (2024-07-31)


### Features

* add expandable-content component & add patient record therapies tab ([05b4056](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/05b4056f75aa21ea80dd33fd4accec8b8392a08c))
* adjusted mtb search form (labels, checkboxes, ...) ([8bf3d6f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8bf3d6f55cb77cd355f1646e53495643296361ec))
* adjusted summary view according to api changes + minor style enhancements ([e1cf350](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e1cf35086c84a63fbb44168ac4014cf9464adc60))
* align rd and mtb view ([4443732](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/44437321700e0fcd25c99e239066209fd7d25c9e))
* allow specifying support-variant option for mtb query ([c8bf125](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/c8bf1253e9aecd3e0e15a72c86ca25fc94d634a4))
* apply filters to tumor morphology criteria ([a0c5e00](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a0c5e0061227d09b98c9d89147678fa8e4a51812))
* assume query criteria is null or undefined ([66e21a4](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/66e21a4b893428d50f8c67f5167feca88c96f5cb))
* avoid modifying chip array multiple times ([#620](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/620)) ([851d2bd](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/851d2bd7a5454558630b54829a8264d751cf268a))
* bump authup & vuecs dependencies ([f9fc12b](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f9fc12bcb427e2fb1a4eff0f31dd52ba19a5d410))
* change logical operator for medication ([2a78530](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2a785305817a6803b2506afa5db47dc9a2c59fee))
* change order of medication and response in search form ([da926b4](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/da926b4348c3256335adc8062107d3edbb8e9e9e))
* consistent component naming + minor style and component issues ([#323](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/323)) ([2ed563e](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2ed563ed71ce36551852bcd57b7909fb9dd2690e))
* display matching criteria in query patient match list ([#324](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/324)) ([a3f2843](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a3f2843903165936e6ff1c5b4feba40c8ca55c1f))
* display therapy line on guideline therapies and guideline procedure ([#318](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/318)) ([ed63d87](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ed63d87e5b4f2f44726d34f4f311d0e10a9b61a8))
* enhanced summary diagnostics view & adjusted type structure ([f72a826](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f72a82646c8af79764d013ce8d6a6324b71c0cd1))
* implemeneted infinite-scroll for form-slect-search fields ([#530](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/530)) ([36dec87](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/36dec87edee8482a14ff395743dbe08b1c5ccb98))
* implemented filters for valueset/codesystem entities ([36c771d](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/36c771d8953e5de41e8fc0038d6c575f8e20cb44))
* implemented global filter for mtb ([b74ca4f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b74ca4fe5deb4bc3c48c90390e401ccbc5ff7a5f))
* implemented internal mtb form logic and state management ([6197be4](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/6197be47515f1efe0a870877baa7c2d3eb704669))
* implemented patient-record view ([ac72d56](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ac72d560bfa23206e816266879210281a62dd6f4))
* implemented validation for protein change inputs ([#471](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/471)) ([0c38990](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/0c38990f9a6c40ed5ca89ec3925b75cf0cfc4a2f))
* initial final summary view for mtb and rd ([f89e085](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f89e08506fd7866d7fc39d1c3b690ecf033c4e63))
* initial implementaion of query info page ([#507](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/507)) ([1a5a797](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1a5a7972c2864ee240c4bad9bba50040cb939ec5))
* initial mtb domains, pages etc + initial type refactoring + fix page schema generation ([2befba6](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2befba6ed6e169e5c88c8038985ca7d10ed0ded5))
* initial mtb form elements/components ([8fd3720](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8fd3720fd65ab808307814233e9a184603d23d40))
* initial mtb patient-record view ([ec58fbc](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ec58fbcfe855546bb8eee80ec86c94a34489c642))
* initial patient-list & enable modification of query search ([108a3ee](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/108a3eefef45b4b191cb060e391eacdf57976f7a))
* initial permission implementation for rd & mtb use case ([9c58cf1](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/9c58cf1c401e68fad4db52480cc25185e7046d4a))
* initial refactoring of module registration ([70467ff](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/70467ffe45acf1423d1085122e94a0337df3ee58))
* kaplan-meier survival statistics ([56de499](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56de499a739c62c28db06101507b237af3ac1beb))
* logical operator switch for medication type ([#563](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/563)) ([9425f33](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/9425f33bbe85b1ad10a74e60e2285a7aaa067eed))
* minor adjustments to patient-record view ([91bde67](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/91bde67e52b6bf7984f74090b4d00bc41dcd0f3a))
* modal search ([#587](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/587)) ([7260a60](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/7260a602f52e74c0389237dfa7b2825754cffd9a))
* mtb summary endpoint split ([#659](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/659)) ([c661f5f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/c661f5f8fabca06aa3f15c31d03dea16ddc5eb2a))
* new kit package for registering modules + initial mtb module package ([71a8384](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/71a83848a3aeb5f633fea9172f5b423d3f58df20))
* only display use-case modules on home screen ([2c468f3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2c468f3f159bdd08197a56ef7a90c8600b6858c0))
* refactored kalpan meier survival report view ([#539](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/539)) ([49f0cde](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/49f0cde5d289ee73c14913109d781c94570d4f4b))
* refactored query summary rendering ([21acf07](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/21acf07fc163067e38588c840c40cd5b0e84f9af))
* refactoring summary logic ([4d41987](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/4d4198738864b7370fc96e18192ec351fc49fe3d))
* reimplemented plugin (http-client, ...) installation and procedure ([#465](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/465)) ([dc1af34](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/dc1af345e5509f60a9f0a8deda678e0af5ac2f4f))
* remove components & upgraded vuecs/form-controls ([ff634f2](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ff634f20283f743c79a3938e4878210e64b56b20))
* set search form to full width ([1302025](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1302025255f466dad9a32ff4a9348e30a1ae9af6))
* simplified api singleton management ([15955cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/15955cb28b7cf311510b260d70cc9ade74d9f709))
* support multiple catalogs for rd disease category ([60c558e](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/60c558ee8f70eaea9779535ab49cec1a51c8b3b1))
* support registered and unregistered medication selection ([2e6b2e7](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2e6b2e72908c9a06bd187519e0ab2b10596b8e37))
* therapy-response table ([#636](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/636)) ([af39643](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/af3964303d93893fceed724fd41b74ccba0a28b6))
* unified component for query criteria summary ([#627](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/627)) ([2694bb5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2694bb5281f3ee9cd5cd1c8f1d774142dd9c4b4a))
* use kaplan-meier config defaults for rendering picker ([032abaf](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/032abaf7975611270db7b749431263261ff5273b))
* verbose coding display label via option + minor spelling fixes ([#463](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/463)) ([81cbd59](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/81cbd59110488b2c00ff337137869ce8737b017a))
* view for nested query summary (distribution with children) ([#569](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/569)) ([dcb6305](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/dcb630519e1f628f9b15fea30c154fb849e1be08))


### Bug Fixes

* adjusted dtos to breaking backend changes ([29fb1c1](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/29fb1c1fde9d2e5edb8cd4179ba6313d11fc6172))
* adjusted mtb & rd (type-) structure ([e80bd45](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e80bd45b7543dc3baf2a26d077af5111fbf1a5df))
* align headings ([63815a7](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/63815a787356eef720d06dadecbf6c565d6d88a7))
* applying initial query-filters on mtb query page ([#474](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/474)) ([c4b1c90](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/c4b1c90871eb192b05ae9e3807da95cf041a9c07))
* cleanup kaplan-meier option picker ([f54eb40](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f54eb406c4328b39608828687e6adfa724751709))
* **deps:** bump @authup/client-web-kit ([#560](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/560)) ([8417cec](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8417cece735865bb994510d67c33ffb3f8fad950))
* **deps:** bump @authup/client-web-kit ([#574](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/574)) ([9b574fe](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/9b574fea5b905d4f3fd08312e43f5101934f527c))
* **deps:** bump bootstrap-vue-next from 0.20.0 to 0.21.0 ([#504](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/504)) ([8b40b91](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8b40b91907ffbda606570e8008ecc4b5343e939c))
* **deps:** bump bootstrap-vue-next from 0.21.0 to 0.21.2 ([#519](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/519)) ([d0fffb2](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/d0fffb2e4980654751f1d6866312f211860ed381))
* **deps:** bump bootstrap-vue-next from 0.21.2 to 0.22.1 ([#548](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/548)) ([1839a77](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1839a77d6642481952fb512031d7829260100459))
* **deps:** bump bootstrap-vue-next from 0.22.1 to 0.22.2 ([#565](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/565)) ([742919b](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/742919b0534ffaded3a29c21fe8be2d87d59109f))
* **deps:** bump bootstrap-vue-next from 0.22.2 to 0.23.5 ([#609](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/609)) ([0e1aed3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/0e1aed385a77b9807e3c5aef03025e01e209014a))
* **deps:** bump bootstrap-vue-next from 0.23.5 to 0.24.0 ([#622](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/622)) ([c980fe3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/c980fe3276989dafe0d5ca981412dbb49404b13c))
* **deps:** bump nuxt and reset lock file ([8de5687](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8de5687a1a170877b15f0e1ec3bd20147b0b72d8))
* **deps:** bump nuxt to v3.11.1 ([56b6c82](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56b6c82db62519db6edc40ebb33cfceb10e9dedf))
* **deps:** bump vue from 3.4.29 to 3.4.30 ([#556](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/556)) ([ba37564](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ba375640edd7ec28f6d19b8c6eeca4f7b10e11c8))
* **deps:** bump vue from 3.4.30 to 3.4.32 ([#617](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/617)) ([c0f0fa8](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/c0f0fa8bf71086188baea51b7330cb640f83b12b))
* enhance heading of survival reports ([8b51265](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8b51265f2f9e5523a2e1576ae19c0334c8d77f4a))
* hot fix for admin section ([dfafc8a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/dfafc8ab4130001e260d718093dbd9272fadfc99))
* layout in mtb and rd module ([b968ac9](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b968ac9e58f25fdb294698ee08ad0dea794c07ca))
* minor adjustment for summary view ([572a5cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/572a5cbee163f398594497ae06e93b62e6572e25))
* minor changes to bump version ([a716868](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a7168681078dae8550c04fe06475b1561560d718))
* minor enhancement to displaying snv, cnv, rna- & dn-afusion in patient list ([8963c68](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8963c68e703be9b96cf48551ac9661558c5aa578))
* mtb (sub-) forms & form-select-search component ([ae1a986](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ae1a986ed7990646e7eeaf95b21e470db1c4dde8))
* passing medication criteria to query endpoint ([12d7087](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/12d7087cca174a5b0e49053a792198347764e41a))
* patient view rendering + better color scheme generation ([3c09a91](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/3c09a91c93706d506c773e33578e6885b17bb6b2))
* remove ':' after criteria in patient-list view ([496dc86](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/496dc86c12f3439191e3016581fcc82096d3157c))
* remove suffix from diagnose category label ([80413a5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/80413a579987287ee18029c69604066cafb22699))
* rendering api client issues & toast composable for errors and custom data ([ce66cb5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ce66cb52e5e94d6e44ea43f2c62d8bd560acaea3))
* rendering grouped query-summary on patient-filter change ([52dad18](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/52dad187d538e090412b242ea7930f10609dfde2))
* require minimal parameters for medication query criteria ([353a956](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/353a9561827b13275874e32dd938e86ba6f7cbd1))
* restoring medication usage from query record ([#619](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/619)) ([7a87311](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/7a87311e72dd325778021b5315993d8ead2383e1))
* restoring mtb mutation sub form ([#473](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/473)) ([51e99ca](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/51e99ca51a8fa90544bb36ebb58061af37c94c14))
* some spelling issues ([e80f430](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e80f430e65e0f18bc62b1dfd72a52429f6d12db9))
* therapy response view percentage calculation ([ac78e5a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ac78e5ab01aaee0642a245e93769f0c16c424390))
* typo in follow-up tab view ([f135f8a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f135f8abe425fb96b1531505cf510e10e567b984))
* updated lock file ([94b3002](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/94b30028e2d2075a1e3425a4ed4021635311937b))
* use type instead of enum import in module definition ([1ed5ae3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1ed5ae3b330cae5ed800f3c842a528a8142843cb))
* word breaks in patient view ([e866308](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e8663081b999967124b022c7e3591b2560abb06e))
* wording of mtb query form placeholders ([#464](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/464)) ([bdd31e3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/bdd31e33c8dc1443a3f98212e45b7cc1d352d092))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.17.0 to ^1.18.0
    * @dnpm-dip/kit bumped from ^1.13.0 to ^1.14.0

## [1.17.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.16.1...v1.17.0) (2024-07-29)


### Features

* support registered and unregistered medication selection ([2e6b2e7](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2e6b2e72908c9a06bd187519e0ab2b10596b8e37))


### Bug Fixes

* therapy response view percentage calculation ([ac78e5a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ac78e5ab01aaee0642a245e93769f0c16c424390))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.16.0 to ^1.17.0
    * @dnpm-dip/kit bumped from ^1.12.2 to ^1.13.0

## [1.16.1](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.16.0...v1.16.1) (2024-07-23)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/kit bumped from ^1.12.1 to ^1.12.2

## [1.16.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.15.0...v1.16.0) (2024-07-19)


### Features

* add expandable-content component & add patient record therapies tab ([05b4056](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/05b4056f75aa21ea80dd33fd4accec8b8392a08c))
* adjusted mtb search form (labels, checkboxes, ...) ([8bf3d6f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8bf3d6f55cb77cd355f1646e53495643296361ec))
* adjusted summary view according to api changes + minor style enhancements ([e1cf350](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e1cf35086c84a63fbb44168ac4014cf9464adc60))
* align rd and mtb view ([4443732](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/44437321700e0fcd25c99e239066209fd7d25c9e))
* allow specifying support-variant option for mtb query ([c8bf125](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/c8bf1253e9aecd3e0e15a72c86ca25fc94d634a4))
* apply filters to tumor morphology criteria ([a0c5e00](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a0c5e0061227d09b98c9d89147678fa8e4a51812))
* assume query criteria is null or undefined ([66e21a4](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/66e21a4b893428d50f8c67f5167feca88c96f5cb))
* avoid modifying chip array multiple times ([#620](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/620)) ([851d2bd](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/851d2bd7a5454558630b54829a8264d751cf268a))
* bump authup & vuecs dependencies ([f9fc12b](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f9fc12bcb427e2fb1a4eff0f31dd52ba19a5d410))
* change logical operator for medication ([2a78530](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2a785305817a6803b2506afa5db47dc9a2c59fee))
* change order of medication and response in search form ([da926b4](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/da926b4348c3256335adc8062107d3edbb8e9e9e))
* consistent component naming + minor style and component issues ([#323](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/323)) ([2ed563e](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2ed563ed71ce36551852bcd57b7909fb9dd2690e))
* display matching criteria in query patient match list ([#324](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/324)) ([a3f2843](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a3f2843903165936e6ff1c5b4feba40c8ca55c1f))
* display therapy line on guideline therapies and guideline procedure ([#318](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/318)) ([ed63d87](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ed63d87e5b4f2f44726d34f4f311d0e10a9b61a8))
* enhanced summary diagnostics view & adjusted type structure ([f72a826](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f72a82646c8af79764d013ce8d6a6324b71c0cd1))
* implemeneted infinite-scroll for form-slect-search fields ([#530](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/530)) ([36dec87](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/36dec87edee8482a14ff395743dbe08b1c5ccb98))
* implemented filters for valueset/codesystem entities ([36c771d](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/36c771d8953e5de41e8fc0038d6c575f8e20cb44))
* implemented global filter for mtb ([b74ca4f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b74ca4fe5deb4bc3c48c90390e401ccbc5ff7a5f))
* implemented internal mtb form logic and state management ([6197be4](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/6197be47515f1efe0a870877baa7c2d3eb704669))
* implemented patient-record view ([ac72d56](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ac72d560bfa23206e816266879210281a62dd6f4))
* implemented validation for protein change inputs ([#471](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/471)) ([0c38990](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/0c38990f9a6c40ed5ca89ec3925b75cf0cfc4a2f))
* initial final summary view for mtb and rd ([f89e085](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f89e08506fd7866d7fc39d1c3b690ecf033c4e63))
* initial implementaion of query info page ([#507](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/507)) ([1a5a797](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1a5a7972c2864ee240c4bad9bba50040cb939ec5))
* initial mtb domains, pages etc + initial type refactoring + fix page schema generation ([2befba6](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2befba6ed6e169e5c88c8038985ca7d10ed0ded5))
* initial mtb form elements/components ([8fd3720](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8fd3720fd65ab808307814233e9a184603d23d40))
* initial mtb patient-record view ([ec58fbc](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ec58fbcfe855546bb8eee80ec86c94a34489c642))
* initial patient-list & enable modification of query search ([108a3ee](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/108a3eefef45b4b191cb060e391eacdf57976f7a))
* initial permission implementation for rd & mtb use case ([9c58cf1](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/9c58cf1c401e68fad4db52480cc25185e7046d4a))
* initial refactoring of module registration ([70467ff](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/70467ffe45acf1423d1085122e94a0337df3ee58))
* kaplan-meier survival statistics ([56de499](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56de499a739c62c28db06101507b237af3ac1beb))
* logical operator switch for medication type ([#563](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/563)) ([9425f33](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/9425f33bbe85b1ad10a74e60e2285a7aaa067eed))
* minor adjustments to patient-record view ([91bde67](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/91bde67e52b6bf7984f74090b4d00bc41dcd0f3a))
* modal search ([#587](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/587)) ([7260a60](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/7260a602f52e74c0389237dfa7b2825754cffd9a))
* new kit package for registering modules + initial mtb module package ([71a8384](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/71a83848a3aeb5f633fea9172f5b423d3f58df20))
* only display use-case modules on home screen ([2c468f3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2c468f3f159bdd08197a56ef7a90c8600b6858c0))
* refactored kalpan meier survival report view ([#539](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/539)) ([49f0cde](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/49f0cde5d289ee73c14913109d781c94570d4f4b))
* refactored query summary rendering ([21acf07](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/21acf07fc163067e38588c840c40cd5b0e84f9af))
* refactoring summary logic ([4d41987](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/4d4198738864b7370fc96e18192ec351fc49fe3d))
* reimplemented plugin (http-client, ...) installation and procedure ([#465](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/465)) ([dc1af34](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/dc1af345e5509f60a9f0a8deda678e0af5ac2f4f))
* remove components & upgraded vuecs/form-controls ([ff634f2](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ff634f20283f743c79a3938e4878210e64b56b20))
* set search form to full width ([1302025](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1302025255f466dad9a32ff4a9348e30a1ae9af6))
* simplified api singleton management ([15955cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/15955cb28b7cf311510b260d70cc9ade74d9f709))
* support multiple catalogs for rd disease category ([60c558e](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/60c558ee8f70eaea9779535ab49cec1a51c8b3b1))
* unified component for query criteria summary ([#627](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/627)) ([2694bb5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2694bb5281f3ee9cd5cd1c8f1d774142dd9c4b4a))
* use kaplan-meier config defaults for rendering picker ([032abaf](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/032abaf7975611270db7b749431263261ff5273b))
* verbose coding display label via option + minor spelling fixes ([#463](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/463)) ([81cbd59](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/81cbd59110488b2c00ff337137869ce8737b017a))
* view for nested query summary (distribution with children) ([#569](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/569)) ([dcb6305](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/dcb630519e1f628f9b15fea30c154fb849e1be08))


### Bug Fixes

* adjusted dtos to breaking backend changes ([29fb1c1](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/29fb1c1fde9d2e5edb8cd4179ba6313d11fc6172))
* adjusted mtb & rd (type-) structure ([e80bd45](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e80bd45b7543dc3baf2a26d077af5111fbf1a5df))
* align headings ([63815a7](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/63815a787356eef720d06dadecbf6c565d6d88a7))
* applying initial query-filters on mtb query page ([#474](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/474)) ([c4b1c90](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/c4b1c90871eb192b05ae9e3807da95cf041a9c07))
* cleanup kaplan-meier option picker ([f54eb40](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f54eb406c4328b39608828687e6adfa724751709))
* **deps:** bump @authup/client-web-kit ([#560](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/560)) ([8417cec](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8417cece735865bb994510d67c33ffb3f8fad950))
* **deps:** bump @authup/client-web-kit ([#574](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/574)) ([9b574fe](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/9b574fea5b905d4f3fd08312e43f5101934f527c))
* **deps:** bump bootstrap-vue-next from 0.20.0 to 0.21.0 ([#504](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/504)) ([8b40b91](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8b40b91907ffbda606570e8008ecc4b5343e939c))
* **deps:** bump bootstrap-vue-next from 0.21.0 to 0.21.2 ([#519](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/519)) ([d0fffb2](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/d0fffb2e4980654751f1d6866312f211860ed381))
* **deps:** bump bootstrap-vue-next from 0.21.2 to 0.22.1 ([#548](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/548)) ([1839a77](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1839a77d6642481952fb512031d7829260100459))
* **deps:** bump bootstrap-vue-next from 0.22.1 to 0.22.2 ([#565](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/565)) ([742919b](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/742919b0534ffaded3a29c21fe8be2d87d59109f))
* **deps:** bump bootstrap-vue-next from 0.22.2 to 0.23.5 ([#609](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/609)) ([0e1aed3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/0e1aed385a77b9807e3c5aef03025e01e209014a))
* **deps:** bump bootstrap-vue-next from 0.23.5 to 0.24.0 ([#622](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/622)) ([c980fe3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/c980fe3276989dafe0d5ca981412dbb49404b13c))
* **deps:** bump nuxt and reset lock file ([8de5687](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8de5687a1a170877b15f0e1ec3bd20147b0b72d8))
* **deps:** bump nuxt to v3.11.1 ([56b6c82](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56b6c82db62519db6edc40ebb33cfceb10e9dedf))
* **deps:** bump vue from 3.4.29 to 3.4.30 ([#556](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/556)) ([ba37564](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ba375640edd7ec28f6d19b8c6eeca4f7b10e11c8))
* **deps:** bump vue from 3.4.30 to 3.4.32 ([#617](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/617)) ([c0f0fa8](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/c0f0fa8bf71086188baea51b7330cb640f83b12b))
* enhance heading of survival reports ([8b51265](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8b51265f2f9e5523a2e1576ae19c0334c8d77f4a))
* hot fix for admin section ([dfafc8a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/dfafc8ab4130001e260d718093dbd9272fadfc99))
* layout in mtb and rd module ([b968ac9](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b968ac9e58f25fdb294698ee08ad0dea794c07ca))
* minor adjustment for summary view ([572a5cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/572a5cbee163f398594497ae06e93b62e6572e25))
* minor changes to bump version ([a716868](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a7168681078dae8550c04fe06475b1561560d718))
* minor enhancement to displaying snv, cnv, rna- & dn-afusion in patient list ([8963c68](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8963c68e703be9b96cf48551ac9661558c5aa578))
* mtb (sub-) forms & form-select-search component ([ae1a986](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ae1a986ed7990646e7eeaf95b21e470db1c4dde8))
* passing medication criteria to query endpoint ([12d7087](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/12d7087cca174a5b0e49053a792198347764e41a))
* patient view rendering + better color scheme generation ([3c09a91](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/3c09a91c93706d506c773e33578e6885b17bb6b2))
* remove ':' after criteria in patient-list view ([496dc86](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/496dc86c12f3439191e3016581fcc82096d3157c))
* remove suffix from diagnose category label ([80413a5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/80413a579987287ee18029c69604066cafb22699))
* rendering api client issues & toast composable for errors and custom data ([ce66cb5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ce66cb52e5e94d6e44ea43f2c62d8bd560acaea3))
* rendering grouped query-summary on patient-filter change ([52dad18](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/52dad187d538e090412b242ea7930f10609dfde2))
* require minimal parameters for medication query criteria ([353a956](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/353a9561827b13275874e32dd938e86ba6f7cbd1))
* restoring medication usage from query record ([#619](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/619)) ([7a87311](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/7a87311e72dd325778021b5315993d8ead2383e1))
* restoring mtb mutation sub form ([#473](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/473)) ([51e99ca](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/51e99ca51a8fa90544bb36ebb58061af37c94c14))
* some spelling issues ([e80f430](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e80f430e65e0f18bc62b1dfd72a52429f6d12db9))
* typo in follow-up tab view ([f135f8a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f135f8abe425fb96b1531505cf510e10e567b984))
* updated lock file ([94b3002](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/94b30028e2d2075a1e3425a4ed4021635311937b))
* use type instead of enum import in module definition ([1ed5ae3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1ed5ae3b330cae5ed800f3c842a528a8142843cb))
* word breaks in patient view ([e866308](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e8663081b999967124b022c7e3591b2560abb06e))
* wording of mtb query form placeholders ([#464](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/464)) ([bdd31e3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/bdd31e33c8dc1443a3f98212e45b7cc1d352d092))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.15.0 to ^1.16.0
    * @dnpm-dip/kit bumped from ^1.12.0 to ^1.12.1

## [1.15.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.14.1...v1.15.0) (2024-07-04)


### Features

* change logical operator for medication ([2a78530](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2a785305817a6803b2506afa5db47dc9a2c59fee))
* modal search ([#587](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/587)) ([7260a60](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/7260a602f52e74c0389237dfa7b2825754cffd9a))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.14.0 to ^1.15.0

## [1.14.1](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.14.0...v1.14.1) (2024-07-01)


### Bug Fixes

* adjusted mtb & rd (type-) structure ([e80bd45](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e80bd45b7543dc3baf2a26d077af5111fbf1a5df))

## [1.14.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.13.1...v1.14.0) (2024-07-01)


### Features

* logical operator switch for medication type ([#563](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/563)) ([9425f33](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/9425f33bbe85b1ad10a74e60e2285a7aaa067eed))
* view for nested query summary (distribution with children) ([#569](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/569)) ([dcb6305](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/dcb630519e1f628f9b15fea30c154fb849e1be08))


### Bug Fixes

* **deps:** bump @authup/client-web-kit ([#560](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/560)) ([8417cec](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8417cece735865bb994510d67c33ffb3f8fad950))
* **deps:** bump @authup/client-web-kit ([#574](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/574)) ([9b574fe](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/9b574fea5b905d4f3fd08312e43f5101934f527c))
* **deps:** bump bootstrap-vue-next from 0.21.2 to 0.22.1 ([#548](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/548)) ([1839a77](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1839a77d6642481952fb512031d7829260100459))
* **deps:** bump bootstrap-vue-next from 0.22.1 to 0.22.2 ([#565](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/565)) ([742919b](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/742919b0534ffaded3a29c21fe8be2d87d59109f))
* **deps:** bump vue from 3.4.29 to 3.4.30 ([#556](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/556)) ([ba37564](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ba375640edd7ec28f6d19b8c6eeca4f7b10e11c8))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.13.1 to ^1.14.0

## [1.13.1](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.13.0...v1.13.1) (2024-06-24)


### Bug Fixes

* adjusted dtos to breaking backend changes ([29fb1c1](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/29fb1c1fde9d2e5edb8cd4179ba6313d11fc6172))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.13.0 to ^1.13.1

## [1.13.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.12.0...v1.13.0) (2024-06-17)


### Features

* allow specifying support-variant option for mtb query ([c8bf125](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/c8bf1253e9aecd3e0e15a72c86ca25fc94d634a4))
* implemeneted infinite-scroll for form-slect-search fields ([#530](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/530)) ([36dec87](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/36dec87edee8482a14ff395743dbe08b1c5ccb98))
* refactored kalpan meier survival report view ([#539](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/539)) ([49f0cde](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/49f0cde5d289ee73c14913109d781c94570d4f4b))
* refactored query summary rendering ([21acf07](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/21acf07fc163067e38588c840c40cd5b0e84f9af))
* use kaplan-meier config defaults for rendering picker ([032abaf](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/032abaf7975611270db7b749431263261ff5273b))


### Bug Fixes

* cleanup kaplan-meier option picker ([f54eb40](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f54eb406c4328b39608828687e6adfa724751709))
* **deps:** bump bootstrap-vue-next from 0.21.0 to 0.21.2 ([#519](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/519)) ([d0fffb2](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/d0fffb2e4980654751f1d6866312f211860ed381))
* hot fix for admin section ([dfafc8a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/dfafc8ab4130001e260d718093dbd9272fadfc99))
* rendering grouped query-summary on patient-filter change ([52dad18](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/52dad187d538e090412b242ea7930f10609dfde2))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.12.1 to ^1.13.0

## [1.12.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.11.0...v1.12.0) (2024-06-07)


### Features

* add expandable-content component & add patient record therapies tab ([05b4056](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/05b4056f75aa21ea80dd33fd4accec8b8392a08c))
* adjusted mtb search form (labels, checkboxes, ...) ([8bf3d6f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8bf3d6f55cb77cd355f1646e53495643296361ec))
* adjusted summary view according to api changes + minor style enhancements ([e1cf350](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e1cf35086c84a63fbb44168ac4014cf9464adc60))
* align rd and mtb view ([4443732](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/44437321700e0fcd25c99e239066209fd7d25c9e))
* apply filters to tumor morphology criteria ([a0c5e00](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a0c5e0061227d09b98c9d89147678fa8e4a51812))
* bump authup & vuecs dependencies ([f9fc12b](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f9fc12bcb427e2fb1a4eff0f31dd52ba19a5d410))
* consistent component naming + minor style and component issues ([#323](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/323)) ([2ed563e](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2ed563ed71ce36551852bcd57b7909fb9dd2690e))
* display matching criteria in query patient match list ([#324](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/324)) ([a3f2843](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a3f2843903165936e6ff1c5b4feba40c8ca55c1f))
* display therapy line on guideline therapies and guideline procedure ([#318](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/318)) ([ed63d87](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ed63d87e5b4f2f44726d34f4f311d0e10a9b61a8))
* enhanced summary diagnostics view & adjusted type structure ([f72a826](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f72a82646c8af79764d013ce8d6a6324b71c0cd1))
* implemented filters for valueset/codesystem entities ([36c771d](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/36c771d8953e5de41e8fc0038d6c575f8e20cb44))
* implemented global filter for mtb ([b74ca4f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b74ca4fe5deb4bc3c48c90390e401ccbc5ff7a5f))
* implemented internal mtb form logic and state management ([6197be4](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/6197be47515f1efe0a870877baa7c2d3eb704669))
* implemented patient-record view ([ac72d56](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ac72d560bfa23206e816266879210281a62dd6f4))
* implemented validation for protein change inputs ([#471](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/471)) ([0c38990](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/0c38990f9a6c40ed5ca89ec3925b75cf0cfc4a2f))
* initial final summary view for mtb and rd ([f89e085](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f89e08506fd7866d7fc39d1c3b690ecf033c4e63))
* initial implementaion of query info page ([#507](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/507)) ([1a5a797](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1a5a7972c2864ee240c4bad9bba50040cb939ec5))
* initial mtb domains, pages etc + initial type refactoring + fix page schema generation ([2befba6](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2befba6ed6e169e5c88c8038985ca7d10ed0ded5))
* initial mtb form elements/components ([8fd3720](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8fd3720fd65ab808307814233e9a184603d23d40))
* initial mtb patient-record view ([ec58fbc](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ec58fbcfe855546bb8eee80ec86c94a34489c642))
* initial patient-list & enable modification of query search ([108a3ee](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/108a3eefef45b4b191cb060e391eacdf57976f7a))
* initial permission implementation for rd & mtb use case ([9c58cf1](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/9c58cf1c401e68fad4db52480cc25185e7046d4a))
* initial refactoring of module registration ([70467ff](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/70467ffe45acf1423d1085122e94a0337df3ee58))
* kaplan-meier survival statistics ([56de499](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56de499a739c62c28db06101507b237af3ac1beb))
* minor adjustments to patient-record view ([91bde67](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/91bde67e52b6bf7984f74090b4d00bc41dcd0f3a))
* new kit package for registering modules + initial mtb module package ([71a8384](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/71a83848a3aeb5f633fea9172f5b423d3f58df20))
* only display use-case modules on home screen ([2c468f3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2c468f3f159bdd08197a56ef7a90c8600b6858c0))
* refactoring summary logic ([4d41987](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/4d4198738864b7370fc96e18192ec351fc49fe3d))
* reimplemented plugin (http-client, ...) installation and procedure ([#465](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/465)) ([dc1af34](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/dc1af345e5509f60a9f0a8deda678e0af5ac2f4f))
* remove components & upgraded vuecs/form-controls ([ff634f2](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ff634f20283f743c79a3938e4878210e64b56b20))
* set search form to full width ([1302025](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1302025255f466dad9a32ff4a9348e30a1ae9af6))
* simplified api singleton management ([15955cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/15955cb28b7cf311510b260d70cc9ade74d9f709))
* support multiple catalogs for rd disease category ([60c558e](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/60c558ee8f70eaea9779535ab49cec1a51c8b3b1))
* verbose coding display label via option + minor spelling fixes ([#463](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/463)) ([81cbd59](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/81cbd59110488b2c00ff337137869ce8737b017a))


### Bug Fixes

* align headings ([63815a7](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/63815a787356eef720d06dadecbf6c565d6d88a7))
* applying initial query-filters on mtb query page ([#474](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/474)) ([c4b1c90](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/c4b1c90871eb192b05ae9e3807da95cf041a9c07))
* **deps:** bump bootstrap-vue-next from 0.20.0 to 0.21.0 ([#504](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/504)) ([8b40b91](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8b40b91907ffbda606570e8008ecc4b5343e939c))
* **deps:** bump nuxt and reset lock file ([8de5687](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8de5687a1a170877b15f0e1ec3bd20147b0b72d8))
* **deps:** bump nuxt to v3.11.1 ([56b6c82](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56b6c82db62519db6edc40ebb33cfceb10e9dedf))
* enhance heading of survival reports ([8b51265](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8b51265f2f9e5523a2e1576ae19c0334c8d77f4a))
* hot fix for admin section ([dfafc8a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/dfafc8ab4130001e260d718093dbd9272fadfc99))
* layout in mtb and rd module ([b968ac9](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b968ac9e58f25fdb294698ee08ad0dea794c07ca))
* minor adjustment for summary view ([572a5cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/572a5cbee163f398594497ae06e93b62e6572e25))
* minor changes to bump version ([a716868](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a7168681078dae8550c04fe06475b1561560d718))
* minor enhancement to displaying snv, cnv, rna- & dn-afusion in patient list ([8963c68](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8963c68e703be9b96cf48551ac9661558c5aa578))
* mtb (sub-) forms & form-select-search component ([ae1a986](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ae1a986ed7990646e7eeaf95b21e470db1c4dde8))
* passing medication criteria to query endpoint ([12d7087](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/12d7087cca174a5b0e49053a792198347764e41a))
* patient view rendering + better color scheme generation ([3c09a91](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/3c09a91c93706d506c773e33578e6885b17bb6b2))
* remove ':' after criteria in patient-list view ([496dc86](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/496dc86c12f3439191e3016581fcc82096d3157c))
* remove suffix from diagnose category label ([80413a5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/80413a579987287ee18029c69604066cafb22699))
* rendering api client issues & toast composable for errors and custom data ([ce66cb5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ce66cb52e5e94d6e44ea43f2c62d8bd560acaea3))
* require minimal parameters for medication query criteria ([353a956](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/353a9561827b13275874e32dd938e86ba6f7cbd1))
* restoring mtb mutation sub form ([#473](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/473)) ([51e99ca](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/51e99ca51a8fa90544bb36ebb58061af37c94c14))
* some spelling issues ([e80f430](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e80f430e65e0f18bc62b1dfd72a52429f6d12db9))
* typo in follow-up tab view ([f135f8a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f135f8abe425fb96b1531505cf510e10e567b984))
* updated lock file ([94b3002](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/94b30028e2d2075a1e3425a4ed4021635311937b))
* use type instead of enum import in module definition ([1ed5ae3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1ed5ae3b330cae5ed800f3c842a528a8142843cb))
* word breaks in patient view ([e866308](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e8663081b999967124b022c7e3591b2560abb06e))
* wording of mtb query form placeholders ([#464](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/464)) ([bdd31e3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/bdd31e33c8dc1443a3f98212e45b7cc1d352d092))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.12.0 to ^1.12.1
    * @dnpm-dip/kit bumped from ^1.11.0 to ^1.12.0

## [1.11.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.10.1...v1.11.0) (2024-06-07)


### Features

* initial implementaion of query info page ([#507](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/507)) ([1a5a797](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1a5a7972c2864ee240c4bad9bba50040cb939ec5))
* initial permission implementation for rd & mtb use case ([9c58cf1](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/9c58cf1c401e68fad4db52480cc25185e7046d4a))
* initial refactoring of module registration ([70467ff](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/70467ffe45acf1423d1085122e94a0337df3ee58))
* only display use-case modules on home screen ([2c468f3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2c468f3f159bdd08197a56ef7a90c8600b6858c0))


### Bug Fixes

* **deps:** bump bootstrap-vue-next from 0.20.0 to 0.21.0 ([#504](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/504)) ([8b40b91](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8b40b91907ffbda606570e8008ecc4b5343e939c))
* minor enhancement to displaying snv, cnv, rna- & dn-afusion in patient list ([8963c68](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8963c68e703be9b96cf48551ac9661558c5aa578))
* patient view rendering + better color scheme generation ([3c09a91](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/3c09a91c93706d506c773e33578e6885b17bb6b2))
* remove ':' after criteria in patient-list view ([496dc86](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/496dc86c12f3439191e3016581fcc82096d3157c))
* remove suffix from diagnose category label ([80413a5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/80413a579987287ee18029c69604066cafb22699))
* use type instead of enum import in module definition ([1ed5ae3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1ed5ae3b330cae5ed800f3c842a528a8142843cb))
* word breaks in patient view ([e866308](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e8663081b999967124b022c7e3591b2560abb06e))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.11.0 to ^1.12.0
    * @dnpm-dip/kit bumped from ^1.10.0 to ^1.11.0

## [1.10.1](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.10.0...v1.10.1) (2024-05-21)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.10.0 to ^1.11.0

## [1.10.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.9.0...v1.10.0) (2024-05-21)


### Features

* add expandable-content component & add patient record therapies tab ([05b4056](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/05b4056f75aa21ea80dd33fd4accec8b8392a08c))
* adjusted mtb search form (labels, checkboxes, ...) ([8bf3d6f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8bf3d6f55cb77cd355f1646e53495643296361ec))
* adjusted summary view according to api changes + minor style enhancements ([e1cf350](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e1cf35086c84a63fbb44168ac4014cf9464adc60))
* align rd and mtb view ([4443732](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/44437321700e0fcd25c99e239066209fd7d25c9e))
* apply filters to tumor morphology criteria ([a0c5e00](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a0c5e0061227d09b98c9d89147678fa8e4a51812))
* bump authup & vuecs dependencies ([f9fc12b](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f9fc12bcb427e2fb1a4eff0f31dd52ba19a5d410))
* consistent component naming + minor style and component issues ([#323](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/323)) ([2ed563e](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2ed563ed71ce36551852bcd57b7909fb9dd2690e))
* display matching criteria in query patient match list ([#324](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/324)) ([a3f2843](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a3f2843903165936e6ff1c5b4feba40c8ca55c1f))
* display therapy line on guideline therapies and guideline procedure ([#318](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/318)) ([ed63d87](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ed63d87e5b4f2f44726d34f4f311d0e10a9b61a8))
* enhanced summary diagnostics view & adjusted type structure ([f72a826](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f72a82646c8af79764d013ce8d6a6324b71c0cd1))
* implemented filters for valueset/codesystem entities ([36c771d](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/36c771d8953e5de41e8fc0038d6c575f8e20cb44))
* implemented global filter for mtb ([b74ca4f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b74ca4fe5deb4bc3c48c90390e401ccbc5ff7a5f))
* implemented internal mtb form logic and state management ([6197be4](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/6197be47515f1efe0a870877baa7c2d3eb704669))
* implemented patient-record view ([ac72d56](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ac72d560bfa23206e816266879210281a62dd6f4))
* implemented validation for protein change inputs ([#471](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/471)) ([0c38990](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/0c38990f9a6c40ed5ca89ec3925b75cf0cfc4a2f))
* initial final summary view for mtb and rd ([f89e085](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f89e08506fd7866d7fc39d1c3b690ecf033c4e63))
* initial mtb domains, pages etc + initial type refactoring + fix page schema generation ([2befba6](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2befba6ed6e169e5c88c8038985ca7d10ed0ded5))
* initial mtb form elements/components ([8fd3720](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8fd3720fd65ab808307814233e9a184603d23d40))
* initial mtb patient-record view ([ec58fbc](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ec58fbcfe855546bb8eee80ec86c94a34489c642))
* initial patient-list & enable modification of query search ([108a3ee](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/108a3eefef45b4b191cb060e391eacdf57976f7a))
* kaplan-meier survival statistics ([56de499](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56de499a739c62c28db06101507b237af3ac1beb))
* minor adjustments to patient-record view ([91bde67](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/91bde67e52b6bf7984f74090b4d00bc41dcd0f3a))
* new kit package for registering modules + initial mtb module package ([71a8384](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/71a83848a3aeb5f633fea9172f5b423d3f58df20))
* refactoring summary logic ([4d41987](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/4d4198738864b7370fc96e18192ec351fc49fe3d))
* reimplemented plugin (http-client, ...) installation and procedure ([#465](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/465)) ([dc1af34](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/dc1af345e5509f60a9f0a8deda678e0af5ac2f4f))
* remove components & upgraded vuecs/form-controls ([ff634f2](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ff634f20283f743c79a3938e4878210e64b56b20))
* set search form to full width ([1302025](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1302025255f466dad9a32ff4a9348e30a1ae9af6))
* simplified api singleton management ([15955cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/15955cb28b7cf311510b260d70cc9ade74d9f709))
* support multiple catalogs for rd disease category ([60c558e](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/60c558ee8f70eaea9779535ab49cec1a51c8b3b1))
* verbose coding display label via option + minor spelling fixes ([#463](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/463)) ([81cbd59](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/81cbd59110488b2c00ff337137869ce8737b017a))


### Bug Fixes

* align headings ([63815a7](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/63815a787356eef720d06dadecbf6c565d6d88a7))
* applying initial query-filters on mtb query page ([#474](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/474)) ([c4b1c90](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/c4b1c90871eb192b05ae9e3807da95cf041a9c07))
* **deps:** bump nuxt and reset lock file ([8de5687](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8de5687a1a170877b15f0e1ec3bd20147b0b72d8))
* **deps:** bump nuxt to v3.11.1 ([56b6c82](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56b6c82db62519db6edc40ebb33cfceb10e9dedf))
* enhance heading of survival reports ([8b51265](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8b51265f2f9e5523a2e1576ae19c0334c8d77f4a))
* layout in mtb and rd module ([b968ac9](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b968ac9e58f25fdb294698ee08ad0dea794c07ca))
* minor adjustment for summary view ([572a5cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/572a5cbee163f398594497ae06e93b62e6572e25))
* minor changes to bump version ([a716868](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a7168681078dae8550c04fe06475b1561560d718))
* mtb (sub-) forms & form-select-search component ([ae1a986](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ae1a986ed7990646e7eeaf95b21e470db1c4dde8))
* passing medication criteria to query endpoint ([12d7087](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/12d7087cca174a5b0e49053a792198347764e41a))
* rendering api client issues & toast composable for errors and custom data ([ce66cb5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ce66cb52e5e94d6e44ea43f2c62d8bd560acaea3))
* require minimal parameters for medication query criteria ([353a956](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/353a9561827b13275874e32dd938e86ba6f7cbd1))
* restoring mtb mutation sub form ([#473](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/473)) ([51e99ca](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/51e99ca51a8fa90544bb36ebb58061af37c94c14))
* some spelling issues ([e80f430](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e80f430e65e0f18bc62b1dfd72a52429f6d12db9))
* typo in follow-up tab view ([f135f8a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f135f8abe425fb96b1531505cf510e10e567b984))
* updated lock file ([94b3002](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/94b30028e2d2075a1e3425a4ed4021635311937b))
* wording of mtb query form placeholders ([#464](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/464)) ([bdd31e3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/bdd31e33c8dc1443a3f98212e45b7cc1d352d092))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.9.0 to ^1.10.0
    * @dnpm-dip/kit bumped from ^1.9.0 to ^1.10.0

## [1.9.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/mtb-v1.8.0...mtb-v1.9.0) (2024-05-17)


### Features

* add expandable-content component & add patient record therapies tab ([05b4056](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/05b4056f75aa21ea80dd33fd4accec8b8392a08c))
* adjusted mtb search form (labels, checkboxes, ...) ([8bf3d6f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8bf3d6f55cb77cd355f1646e53495643296361ec))
* adjusted summary view according to api changes + minor style enhancements ([e1cf350](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e1cf35086c84a63fbb44168ac4014cf9464adc60))
* align rd and mtb view ([4443732](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/44437321700e0fcd25c99e239066209fd7d25c9e))
* apply filters to tumor morphology criteria ([a0c5e00](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a0c5e0061227d09b98c9d89147678fa8e4a51812))
* bump authup & vuecs dependencies ([f9fc12b](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f9fc12bcb427e2fb1a4eff0f31dd52ba19a5d410))
* consistent component naming + minor style and component issues ([#323](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/323)) ([2ed563e](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2ed563ed71ce36551852bcd57b7909fb9dd2690e))
* display matching criteria in query patient match list ([#324](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/324)) ([a3f2843](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a3f2843903165936e6ff1c5b4feba40c8ca55c1f))
* display therapy line on guideline therapies and guideline procedure ([#318](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/318)) ([ed63d87](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ed63d87e5b4f2f44726d34f4f311d0e10a9b61a8))
* enhanced summary diagnostics view & adjusted type structure ([f72a826](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f72a82646c8af79764d013ce8d6a6324b71c0cd1))
* implemented filters for valueset/codesystem entities ([36c771d](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/36c771d8953e5de41e8fc0038d6c575f8e20cb44))
* implemented global filter for mtb ([b74ca4f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b74ca4fe5deb4bc3c48c90390e401ccbc5ff7a5f))
* implemented internal mtb form logic and state management ([6197be4](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/6197be47515f1efe0a870877baa7c2d3eb704669))
* implemented patient-record view ([ac72d56](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ac72d560bfa23206e816266879210281a62dd6f4))
* initial final summary view for mtb and rd ([f89e085](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f89e08506fd7866d7fc39d1c3b690ecf033c4e63))
* initial mtb domains, pages etc + initial type refactoring + fix page schema generation ([2befba6](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2befba6ed6e169e5c88c8038985ca7d10ed0ded5))
* initial mtb form elements/components ([8fd3720](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8fd3720fd65ab808307814233e9a184603d23d40))
* initial mtb patient-record view ([ec58fbc](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ec58fbcfe855546bb8eee80ec86c94a34489c642))
* initial patient-list & enable modification of query search ([108a3ee](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/108a3eefef45b4b191cb060e391eacdf57976f7a))
* kaplan-meier survival statistics ([56de499](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56de499a739c62c28db06101507b237af3ac1beb))
* minor adjustments to patient-record view ([91bde67](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/91bde67e52b6bf7984f74090b4d00bc41dcd0f3a))
* new kit package for registering modules + initial mtb module package ([71a8384](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/71a83848a3aeb5f633fea9172f5b423d3f58df20))
* refactoring summary logic ([4d41987](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/4d4198738864b7370fc96e18192ec351fc49fe3d))
* reimplemented plugin (http-client, ...) installation and procedure ([#465](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/465)) ([dc1af34](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/dc1af345e5509f60a9f0a8deda678e0af5ac2f4f))
* remove components & upgraded vuecs/form-controls ([ff634f2](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ff634f20283f743c79a3938e4878210e64b56b20))
* set search form to full width ([1302025](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1302025255f466dad9a32ff4a9348e30a1ae9af6))
* simplified api singleton management ([15955cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/15955cb28b7cf311510b260d70cc9ade74d9f709))
* verbose coding display label via option + minor spelling fixes ([#463](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/463)) ([81cbd59](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/81cbd59110488b2c00ff337137869ce8737b017a))


### Bug Fixes

* align headings ([63815a7](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/63815a787356eef720d06dadecbf6c565d6d88a7))
* **deps:** bump nuxt and reset lock file ([8de5687](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8de5687a1a170877b15f0e1ec3bd20147b0b72d8))
* **deps:** bump nuxt to v3.11.1 ([56b6c82](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56b6c82db62519db6edc40ebb33cfceb10e9dedf))
* enhance heading of survival reports ([8b51265](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8b51265f2f9e5523a2e1576ae19c0334c8d77f4a))
* layout in mtb and rd module ([b968ac9](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b968ac9e58f25fdb294698ee08ad0dea794c07ca))
* minor adjustment for summary view ([572a5cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/572a5cbee163f398594497ae06e93b62e6572e25))
* minor changes to bump version ([a716868](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a7168681078dae8550c04fe06475b1561560d718))
* mtb (sub-) forms & form-select-search component ([ae1a986](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ae1a986ed7990646e7eeaf95b21e470db1c4dde8))
* passing medication criteria to query endpoint ([12d7087](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/12d7087cca174a5b0e49053a792198347764e41a))
* rendering api client issues & toast composable for errors and custom data ([ce66cb5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ce66cb52e5e94d6e44ea43f2c62d8bd560acaea3))
* require minimal parameters for medication query criteria ([353a956](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/353a9561827b13275874e32dd938e86ba6f7cbd1))
* some spelling issues ([e80f430](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e80f430e65e0f18bc62b1dfd72a52429f6d12db9))
* typo in follow-up tab view ([f135f8a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f135f8abe425fb96b1531505cf510e10e567b984))
* updated lock file ([94b3002](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/94b30028e2d2075a1e3425a4ed4021635311937b))
* wording of mtb query form placeholders ([#464](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/464)) ([bdd31e3](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/bdd31e33c8dc1443a3f98212e45b7cc1d352d092))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.8.0 to ^1.9.0
    * @dnpm-dip/kit bumped from ^1.8.0 to ^1.9.0

## [1.8.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/v1.7.0...v1.8.0) (2024-05-09)


### Features

* add expandable-content component & add patient record therapies tab ([05b4056](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/05b4056f75aa21ea80dd33fd4accec8b8392a08c))
* adjusted mtb search form (labels, checkboxes, ...) ([8bf3d6f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8bf3d6f55cb77cd355f1646e53495643296361ec))
* adjusted summary view according to api changes + minor style enhancements ([e1cf350](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e1cf35086c84a63fbb44168ac4014cf9464adc60))
* align rd and mtb view ([4443732](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/44437321700e0fcd25c99e239066209fd7d25c9e))
* bump authup & vuecs dependencies ([f9fc12b](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f9fc12bcb427e2fb1a4eff0f31dd52ba19a5d410))
* consistent component naming + minor style and component issues ([#323](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/323)) ([2ed563e](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2ed563ed71ce36551852bcd57b7909fb9dd2690e))
* display matching criteria in query patient match list ([#324](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/324)) ([a3f2843](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a3f2843903165936e6ff1c5b4feba40c8ca55c1f))
* display therapy line on guideline therapies and guideline procedure ([#318](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/318)) ([ed63d87](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ed63d87e5b4f2f44726d34f4f311d0e10a9b61a8))
* enhanced summary diagnostics view & adjusted type structure ([f72a826](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f72a82646c8af79764d013ce8d6a6324b71c0cd1))
* implemented filters for valueset/codesystem entities ([36c771d](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/36c771d8953e5de41e8fc0038d6c575f8e20cb44))
* implemented global filter for mtb ([b74ca4f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b74ca4fe5deb4bc3c48c90390e401ccbc5ff7a5f))
* implemented internal mtb form logic and state management ([6197be4](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/6197be47515f1efe0a870877baa7c2d3eb704669))
* implemented patient-record view ([ac72d56](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ac72d560bfa23206e816266879210281a62dd6f4))
* initial final summary view for mtb and rd ([f89e085](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f89e08506fd7866d7fc39d1c3b690ecf033c4e63))
* initial mtb domains, pages etc + initial type refactoring + fix page schema generation ([2befba6](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2befba6ed6e169e5c88c8038985ca7d10ed0ded5))
* initial mtb form elements/components ([8fd3720](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8fd3720fd65ab808307814233e9a184603d23d40))
* initial mtb patient-record view ([ec58fbc](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ec58fbcfe855546bb8eee80ec86c94a34489c642))
* initial patient-list & enable modification of query search ([108a3ee](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/108a3eefef45b4b191cb060e391eacdf57976f7a))
* kaplan-meier survival statistics ([56de499](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56de499a739c62c28db06101507b237af3ac1beb))
* minor adjustments to patient-record view ([91bde67](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/91bde67e52b6bf7984f74090b4d00bc41dcd0f3a))
* new kit package for registering modules + initial mtb module package ([71a8384](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/71a83848a3aeb5f633fea9172f5b423d3f58df20))
* refactoring summary logic ([4d41987](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/4d4198738864b7370fc96e18192ec351fc49fe3d))
* remove components & upgraded vuecs/form-controls ([ff634f2](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ff634f20283f743c79a3938e4878210e64b56b20))
* set search form to full width ([1302025](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1302025255f466dad9a32ff4a9348e30a1ae9af6))
* simplified api singleton management ([15955cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/15955cb28b7cf311510b260d70cc9ade74d9f709))


### Bug Fixes

* align headings ([63815a7](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/63815a787356eef720d06dadecbf6c565d6d88a7))
* **deps:** bump nuxt and reset lock file ([8de5687](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8de5687a1a170877b15f0e1ec3bd20147b0b72d8))
* **deps:** bump nuxt to v3.11.1 ([56b6c82](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56b6c82db62519db6edc40ebb33cfceb10e9dedf))
* enhance heading of survival reports ([8b51265](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8b51265f2f9e5523a2e1576ae19c0334c8d77f4a))
* layout in mtb and rd module ([b968ac9](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b968ac9e58f25fdb294698ee08ad0dea794c07ca))
* minor adjustment for summary view ([572a5cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/572a5cbee163f398594497ae06e93b62e6572e25))
* minor changes to bump version ([a716868](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a7168681078dae8550c04fe06475b1561560d718))
* mtb (sub-) forms & form-select-search component ([ae1a986](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ae1a986ed7990646e7eeaf95b21e470db1c4dde8))
* passing medication criteria to query endpoint ([12d7087](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/12d7087cca174a5b0e49053a792198347764e41a))
* rendering api client issues & toast composable for errors and custom data ([ce66cb5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ce66cb52e5e94d6e44ea43f2c62d8bd560acaea3))
* require minimal parameters for medication query criteria ([353a956](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/353a9561827b13275874e32dd938e86ba6f7cbd1))
* some spelling issues ([e80f430](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e80f430e65e0f18bc62b1dfd72a52429f6d12db9))
* typo in follow-up tab view ([f135f8a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f135f8abe425fb96b1531505cf510e10e567b984))
* updated lock file ([94b3002](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/94b30028e2d2075a1e3425a4ed4021635311937b))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.7.0 to ^1.8.0
    * @dnpm-dip/kit bumped from ^1.7.0 to ^1.8.0

## [1.7.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/mtb-v1.6.0...mtb-v1.7.0) (2024-03-13)


### Features

* consistent component naming + minor style and component issues ([#323](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/323)) ([2ed563e](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2ed563ed71ce36551852bcd57b7909fb9dd2690e))
* display therapy line on guideline therapies and guideline procedure ([#318](https://github.com/KohlbacherLab/dnpm-dip-portal/issues/318)) ([ed63d87](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ed63d87e5b4f2f44726d34f4f311d0e10a9b61a8))
* implemented filters for valueset/codesystem entities ([36c771d](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/36c771d8953e5de41e8fc0038d6c575f8e20cb44))
* remove components & upgraded vuecs/form-controls ([ff634f2](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ff634f20283f743c79a3938e4878210e64b56b20))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.6.0 to ^1.7.0
    * @dnpm-dip/kit bumped from ^1.6.0 to ^1.7.0

## [1.6.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/mtb-v1.5.0...mtb-v1.6.0) (2024-03-07)


### Features

* minor adjustments to patient-record view ([91bde67](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/91bde67e52b6bf7984f74090b4d00bc41dcd0f3a))
* set search form to full width ([1302025](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/1302025255f466dad9a32ff4a9348e30a1ae9af6))


### Bug Fixes

* typo in follow-up tab view ([f135f8a](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f135f8abe425fb96b1531505cf510e10e567b984))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.5.0 to ^1.6.0
    * @dnpm-dip/kit bumped from ^1.5.0 to ^1.6.0

## [1.5.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/mtb-v1.4.0...mtb-v1.5.0) (2024-02-29)


### Features

* align rd and mtb view ([4443732](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/44437321700e0fcd25c99e239066209fd7d25c9e))


### Bug Fixes

* align headings ([63815a7](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/63815a787356eef720d06dadecbf6c565d6d88a7))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.4.0 to ^1.5.0
    * @dnpm-dip/kit bumped from ^1.4.0 to ^1.5.0

## [1.4.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/mtb-v1.3.0...mtb-v1.4.0) (2024-02-29)


### Features

* add expandable-content component & add patient record therapies tab ([05b4056](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/05b4056f75aa21ea80dd33fd4accec8b8392a08c))
* implemented patient-record view ([ac72d56](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ac72d560bfa23206e816266879210281a62dd6f4))
* initial mtb patient-record view ([ec58fbc](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ec58fbcfe855546bb8eee80ec86c94a34489c642))
* kaplan-meier survival statistics ([56de499](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/56de499a739c62c28db06101507b237af3ac1beb))


### Bug Fixes

* enhance heading of survival reports ([8b51265](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8b51265f2f9e5523a2e1576ae19c0334c8d77f4a))
* layout in mtb and rd module ([b968ac9](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b968ac9e58f25fdb294698ee08ad0dea794c07ca))
* some spelling issues ([e80f430](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e80f430e65e0f18bc62b1dfd72a52429f6d12db9))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.3.0 to ^1.4.0
    * @dnpm-dip/kit bumped from ^1.3.0 to ^1.4.0

## [1.3.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/mtb-v1.2.0...mtb-v1.3.0) (2024-02-15)


### Features

* implemented global filter for mtb ([b74ca4f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/b74ca4fe5deb4bc3c48c90390e401ccbc5ff7a5f))
* initial patient-list & enable modification of query search ([108a3ee](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/108a3eefef45b4b191cb060e391eacdf57976f7a))


### Bug Fixes

* minor adjustment for summary view ([572a5cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/572a5cbee163f398594497ae06e93b62e6572e25))
* passing medication criteria to query endpoint ([12d7087](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/12d7087cca174a5b0e49053a792198347764e41a))
* rendering api client issues & toast composable for errors and custom data ([ce66cb5](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ce66cb52e5e94d6e44ea43f2c62d8bd560acaea3))
* require minimal parameters for medication query criteria ([353a956](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/353a9561827b13275874e32dd938e86ba6f7cbd1))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.2.0 to ^1.3.0
    * @dnpm-dip/kit bumped from ^1.2.0 to ^1.3.0

## [1.2.0](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/mtb-v1.1.3...mtb-v1.2.0) (2024-01-31)


### Features

* adjusted mtb search form (labels, checkboxes, ...) ([8bf3d6f](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8bf3d6f55cb77cd355f1646e53495643296361ec))
* adjusted summary view according to api changes + minor style enhancements ([e1cf350](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/e1cf35086c84a63fbb44168ac4014cf9464adc60))
* enhanced summary diagnostics view & adjusted type structure ([f72a826](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f72a82646c8af79764d013ce8d6a6324b71c0cd1))


### Bug Fixes

* **deps:** bump nuxt and reset lock file ([8de5687](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8de5687a1a170877b15f0e1ec3bd20147b0b72d8))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.1.3 to ^1.2.0
    * @dnpm-dip/kit bumped from ^1.1.3 to ^1.2.0

## [1.1.3](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/mtb-v1.1.2...mtb-v1.1.3) (2024-01-25)


### Miscellaneous Chores

* **mtb:** Synchronize main versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.1.2 to ^1.1.3
    * @dnpm-dip/kit bumped from ^1.1.2 to ^1.1.3

## [1.1.2](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/mtb-v1.1.1...mtb-v1.1.2) (2024-01-25)


### Bug Fixes

* updated lock file ([94b3002](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/94b30028e2d2075a1e3425a4ed4021635311937b))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.1.1 to ^1.1.2
    * @dnpm-dip/kit bumped from ^1.1.1 to ^1.1.2

## [1.1.1](https://github.com/KohlbacherLab/dnpm-dip-portal/compare/mtb-v1.1.0...mtb-v1.1.1) (2024-01-25)


### Bug Fixes

* minor changes to bump version ([a716868](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/a7168681078dae8550c04fe06475b1561560d718))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.1.0 to ^1.1.1
    * @dnpm-dip/kit bumped from ^1.1.0 to ^1.1.1

## 1.1.0 (2024-01-25)


### Features

* implemented internal mtb form logic and state management ([6197be4](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/6197be47515f1efe0a870877baa7c2d3eb704669))
* initial final summary view for mtb and rd ([f89e085](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/f89e08506fd7866d7fc39d1c3b690ecf033c4e63))
* initial mtb domains, pages etc + initial type refactoring + fix page schema generation ([2befba6](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/2befba6ed6e169e5c88c8038985ca7d10ed0ded5))
* initial mtb form elements/components ([8fd3720](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/8fd3720fd65ab808307814233e9a184603d23d40))
* new kit package for registering modules + initial mtb module package ([71a8384](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/71a83848a3aeb5f633fea9172f5b423d3f58df20))
* refactoring summary logic ([4d41987](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/4d4198738864b7370fc96e18192ec351fc49fe3d))
* simplified api singleton management ([15955cb](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/15955cb28b7cf311510b260d70cc9ade74d9f709))


### Bug Fixes

* mtb (sub-) forms & form-select-search component ([ae1a986](https://github.com/KohlbacherLab/dnpm-dip-portal/commit/ae1a986ed7990646e7eeaf95b21e470db1c4dde8))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @dnpm-dip/core bumped from ^1.0.0 to ^1.1.0
    * @dnpm-dip/kit bumped from ^0.0.0 to ^1.1.0
