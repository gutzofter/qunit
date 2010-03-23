
$(function(){
        function buildTestResult(hook, assignId) {
                var result = id(hook);
                if ( !result ) {
                        result = document.createElement("p");
                        result.id = (config.stats.bad ? "qunit-testresult-fail" : "qunit-testresult-pass");
                        result.className = "result";
                        tests.parentNode.insertBefore( result, tests.nextSibling );
                }

                return result;
        }

        module("display-test-result");

        test("create test result output", function(){

                $("#display-test-results").hide();

                equals($("#display-test-results").css("display"), "none", "The element should be hidden");
        });

//        test("create private functions", function(){
//
//                var result = buildTestResult("#display-test-results");
//
//                $("#display-test-results").hide();
//
//                equals($("#display-test-results").css("display"), "none", "The element should be hidden");
//        });




});