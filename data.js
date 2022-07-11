window.BENCHMARK_DATA = {
  "lastUpdate": 1657561103120,
  "repoUrl": "https://github.com/gear-tech/gear",
  "entries": {
    "Gear workspace tests": [
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "f7ed4ccfed64474d5b5e39b0f499013cf2621704",
          "message": "Fix clippy warnings",
          "timestamp": "2022-07-11T17:18:31Z",
          "url": "https://github.com/gear-tech/gear/commit/f7ed4ccfed64474d5b5e39b0f499013cf2621704"
        },
        "date": 1657560797382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 9504300000,
            "unit": "ns",
            "range": "± 22564463689"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 35600000,
            "unit": "ns",
            "range": "± 23251666"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 43600000,
            "unit": "ns",
            "range": "± 46033031"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 42900000,
            "unit": "ns",
            "range": "± 22655904"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 113100000,
            "unit": "ns",
            "range": "± 39765437"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 83100000,
            "unit": "ns",
            "range": "± 72829183"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 60400000,
            "unit": "ns",
            "range": "± 68205864"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 37700000,
            "unit": "ns",
            "range": "± 30551759"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 40100000,
            "unit": "ns",
            "range": "± 43713727"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 366200000,
            "unit": "ns",
            "range": "± 91702562"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 72300000,
            "unit": "ns",
            "range": "± 72386531"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 64500000,
            "unit": "ns",
            "range": "± 54474305"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 56500000,
            "unit": "ns",
            "range": "± 49824190"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 85600000,
            "unit": "ns",
            "range": "± 35168736"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 70800000,
            "unit": "ns",
            "range": "± 71169937"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 75800000,
            "unit": "ns",
            "range": "± 49929550"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 46500000,
            "unit": "ns",
            "range": "± 36155912"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 75100000,
            "unit": "ns",
            "range": "± 58354862"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 84400000,
            "unit": "ns",
            "range": "± 99645571"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 54500000,
            "unit": "ns",
            "range": "± 38779504"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 54500000,
            "unit": "ns",
            "range": "± 52133002"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 61700000,
            "unit": "ns",
            "range": "± 43616625"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 73000000,
            "unit": "ns",
            "range": "± 65359008"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 64100000,
            "unit": "ns",
            "range": "± 46269752"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 77100000,
            "unit": "ns",
            "range": "± 43645045"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 69600000,
            "unit": "ns",
            "range": "± 50040383"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 83500000,
            "unit": "ns",
            "range": "± 61753137"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 86300000,
            "unit": "ns",
            "range": "± 57445713"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 64600000,
            "unit": "ns",
            "range": "± 46150189"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 98500000,
            "unit": "ns",
            "range": "± 62552777"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 99600000,
            "unit": "ns",
            "range": "± 83864414"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 51200000,
            "unit": "ns",
            "range": "± 30188739"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 48000000,
            "unit": "ns",
            "range": "± 35304390"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 66200000,
            "unit": "ns",
            "range": "± 56313053"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 57700000,
            "unit": "ns",
            "range": "± 33597767"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 69300000,
            "unit": "ns",
            "range": "± 47732693"
          },
          {
            "name": "pallet-gear - tests::submit_program_expected_failure",
            "value": 80600000,
            "unit": "ns",
            "range": "± 48336735"
          },
          {
            "name": "pallet-gear - tests::submit_program_fails_on_duplicate_id",
            "value": 85700000,
            "unit": "ns",
            "range": "± 60918059"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 269000000,
            "unit": "ns",
            "range": "± 55121683"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 54700000,
            "unit": "ns",
            "range": "± 27571905"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 71400000,
            "unit": "ns",
            "range": "± 40951678"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 77800000,
            "unit": "ns",
            "range": "± 46157989"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 104500000,
            "unit": "ns",
            "range": "± 67825142"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 98700000,
            "unit": "ns",
            "range": "± 64423675"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 112500000,
            "unit": "ns",
            "range": "± 57753354"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 154600000,
            "unit": "ns",
            "range": "± 63185757"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 91200000,
            "unit": "ns",
            "range": "± 44305304"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 104700000,
            "unit": "ns",
            "range": "± 65717653"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 81200000,
            "unit": "ns",
            "range": "± 53760208"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 90800000,
            "unit": "ns",
            "range": "± 44874937"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 72800000,
            "unit": "ns",
            "range": "± 47557964"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 96700000,
            "unit": "ns",
            "range": "± 76031638"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 91500000,
            "unit": "ns",
            "range": "± 54843869"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 119700000,
            "unit": "ns",
            "range": "± 60206395"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 108600000,
            "unit": "ns",
            "range": "± 72473719"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 100900000,
            "unit": "ns",
            "range": "± 59827167"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 77100000,
            "unit": "ns",
            "range": "± 49237079"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 128900000,
            "unit": "ns",
            "range": "± 56296447"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 90900000,
            "unit": "ns",
            "range": "± 71581352"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 95900000,
            "unit": "ns",
            "range": "± 77263768"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 94000000,
            "unit": "ns",
            "range": "± 55853379"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 85000000,
            "unit": "ns",
            "range": "± 47995833"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 87900000,
            "unit": "ns",
            "range": "± 67657150"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 67200000,
            "unit": "ns",
            "range": "± 26969612"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 63200000,
            "unit": "ns",
            "range": "± 33513579"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 90400000,
            "unit": "ns",
            "range": "± 60347659"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 72800000,
            "unit": "ns",
            "range": "± 54631126"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 89100000,
            "unit": "ns",
            "range": "± 51296101"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 62300000,
            "unit": "ns",
            "range": "± 38131483"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 82200000,
            "unit": "ns",
            "range": "± 40992194"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 74000000,
            "unit": "ns",
            "range": "± 47394092"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree",
            "value": 55500000,
            "unit": "ns",
            "range": "± 36376503"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 79400000,
            "unit": "ns",
            "range": "± 66320735"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 80400000,
            "unit": "ns",
            "range": "± 51067014"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure",
            "value": 43400000,
            "unit": "ns",
            "range": "± 18655830"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 49800000,
            "unit": "ns",
            "range": "± 31333049"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 65100000,
            "unit": "ns",
            "range": "± 44392454"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 46600000,
            "unit": "ns",
            "range": "± 44075389"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 52100000,
            "unit": "ns",
            "range": "± 47632866"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 67800000,
            "unit": "ns",
            "range": "± 28212763"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 59800000,
            "unit": "ns",
            "range": "± 39086570"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 51700000,
            "unit": "ns",
            "range": "± 38592874"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 72800000,
            "unit": "ns",
            "range": "± 39798994"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 52300000,
            "unit": "ns",
            "range": "± 38504675"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 67500000,
            "unit": "ns",
            "range": "± 29790099"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 48200000,
            "unit": "ns",
            "range": "± 28627958"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 62200000,
            "unit": "ns",
            "range": "± 36358767"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 71800000,
            "unit": "ns",
            "range": "± 36790759"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 57700000,
            "unit": "ns",
            "range": "± 20312803"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 49800000,
            "unit": "ns",
            "range": "± 25658526"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 61600000,
            "unit": "ns",
            "range": "± 24719223"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 36700000,
            "unit": "ns",
            "range": "± 17412926"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 52400000,
            "unit": "ns",
            "range": "± 30770765"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 58800000,
            "unit": "ns",
            "range": "± 24894979"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 60900000,
            "unit": "ns",
            "range": "± 32216300"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 61700000,
            "unit": "ns",
            "range": "± 32006405"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 49500000,
            "unit": "ns",
            "range": "± 17454225"
          },
          {
            "name": "pallet-usage - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 45000000,
            "unit": "ns",
            "range": "± 22772790"
          },
          {
            "name": "pallet-usage - tests::dust_discarded_with_noop",
            "value": 41500000,
            "unit": "ns",
            "range": "± 16249615"
          },
          {
            "name": "pallet-usage - tests::external_submitter_gets_rewarded",
            "value": 44300000,
            "unit": "ns",
            "range": "± 18687161"
          },
          {
            "name": "pallet-usage - tests::gas_properly_handled_for_trap_replies",
            "value": 38400000,
            "unit": "ns",
            "range": "± 16584329"
          },
          {
            "name": "pallet-usage - tests::ocw_double_charge",
            "value": 42500000,
            "unit": "ns",
            "range": "± 15768639"
          },
          {
            "name": "pallet-usage - tests::ocw_interval_maintained",
            "value": 38400000,
            "unit": "ns",
            "range": "± 17771887"
          },
          {
            "name": "pallet-usage - tests::ocw_interval_stretches_for_large_wait_list",
            "value": 42400000,
            "unit": "ns",
            "range": "± 14582180"
          },
          {
            "name": "pallet-usage - tests::ocw_overlapping_prevented",
            "value": 38100000,
            "unit": "ns",
            "range": "± 23394230"
          },
          {
            "name": "pallet-usage - tests::rent_charge_works",
            "value": 33200000,
            "unit": "ns",
            "range": "± 11178550"
          },
          {
            "name": "pallet-usage - tests::trap_reply_message_is_sent",
            "value": 39500000,
            "unit": "ns",
            "range": "± 14941552"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "f7ed4ccfed64474d5b5e39b0f499013cf2621704",
          "message": "Fix clippy warnings",
          "timestamp": "2022-07-11T17:18:31Z",
          "url": "https://github.com/gear-tech/gear/commit/f7ed4ccfed64474d5b5e39b0f499013cf2621704"
        },
        "date": 1657561102592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 13087800000,
            "unit": "ns",
            "range": "± 29111073054"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 96600000,
            "unit": "ns",
            "range": "± 100618288"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 55200000,
            "unit": "ns",
            "range": "± 46939961"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 75100000,
            "unit": "ns",
            "range": "± 63337903"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 192400000,
            "unit": "ns",
            "range": "± 94657487"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 98300000,
            "unit": "ns",
            "range": "± 62384373"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 88800000,
            "unit": "ns",
            "range": "± 46274831"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 104100000,
            "unit": "ns",
            "range": "± 86226967"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 118000000,
            "unit": "ns",
            "range": "± 89381206"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 559400000,
            "unit": "ns",
            "range": "± 192292589"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 78700000,
            "unit": "ns",
            "range": "± 38382417"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 87700000,
            "unit": "ns",
            "range": "± 49821782"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 76600000,
            "unit": "ns",
            "range": "± 46221639"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 176900000,
            "unit": "ns",
            "range": "± 112730164"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 82200000,
            "unit": "ns",
            "range": "± 46707172"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 111500000,
            "unit": "ns",
            "range": "± 65792476"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 128300000,
            "unit": "ns",
            "range": "± 103135881"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 120500000,
            "unit": "ns",
            "range": "± 84900235"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 87000000,
            "unit": "ns",
            "range": "± 58273493"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 69400000,
            "unit": "ns",
            "range": "± 43607797"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 87200000,
            "unit": "ns",
            "range": "± 50873961"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 126100000,
            "unit": "ns",
            "range": "± 91904787"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 121000000,
            "unit": "ns",
            "range": "± 80877685"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 138800000,
            "unit": "ns",
            "range": "± 108447037"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 174500000,
            "unit": "ns",
            "range": "± 128061899"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 93900000,
            "unit": "ns",
            "range": "± 53376867"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 201500000,
            "unit": "ns",
            "range": "± 141163911"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 145700000,
            "unit": "ns",
            "range": "± 109838108"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 112700000,
            "unit": "ns",
            "range": "± 87931848"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 166800000,
            "unit": "ns",
            "range": "± 101805500"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 130900000,
            "unit": "ns",
            "range": "± 80358509"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 144700000,
            "unit": "ns",
            "range": "± 119499832"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 140600000,
            "unit": "ns",
            "range": "± 115152247"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 103100000,
            "unit": "ns",
            "range": "± 62078095"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 126700000,
            "unit": "ns",
            "range": "± 58060399"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 102400000,
            "unit": "ns",
            "range": "± 53686497"
          },
          {
            "name": "pallet-gear - tests::submit_program_expected_failure",
            "value": 97300000,
            "unit": "ns",
            "range": "± 34240473"
          },
          {
            "name": "pallet-gear - tests::submit_program_fails_on_duplicate_id",
            "value": 87000000,
            "unit": "ns",
            "range": "± 51468436"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 386000000,
            "unit": "ns",
            "range": "± 121012396"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 113000000,
            "unit": "ns",
            "range": "± 70295092"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 115700000,
            "unit": "ns",
            "range": "± 88950604"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 129100000,
            "unit": "ns",
            "range": "± 111099459"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 141900000,
            "unit": "ns",
            "range": "± 63866188"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 101600000,
            "unit": "ns",
            "range": "± 45239805"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 146400000,
            "unit": "ns",
            "range": "± 74276779"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 203400000,
            "unit": "ns",
            "range": "± 80127648"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 118800000,
            "unit": "ns",
            "range": "± 42534221"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 151800000,
            "unit": "ns",
            "range": "± 87792710"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 134800000,
            "unit": "ns",
            "range": "± 104671677"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 110400000,
            "unit": "ns",
            "range": "± 82815698"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 111700000,
            "unit": "ns",
            "range": "± 55501441"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 119700000,
            "unit": "ns",
            "range": "± 66190709"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 163500000,
            "unit": "ns",
            "range": "± 127101730"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 210600000,
            "unit": "ns",
            "range": "± 84744557"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 129400000,
            "unit": "ns",
            "range": "± 90776869"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 142300000,
            "unit": "ns",
            "range": "± 90775602"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 120300000,
            "unit": "ns",
            "range": "± 69596048"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 156900000,
            "unit": "ns",
            "range": "± 66318097"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 111500000,
            "unit": "ns",
            "range": "± 101922764"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 107000000,
            "unit": "ns",
            "range": "± 73722452"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 127000000,
            "unit": "ns",
            "range": "± 94605496"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 174100000,
            "unit": "ns",
            "range": "± 105058507"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 131100000,
            "unit": "ns",
            "range": "± 88363397"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 114600000,
            "unit": "ns",
            "range": "± 87266488"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 127200000,
            "unit": "ns",
            "range": "± 81669823"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 111000000,
            "unit": "ns",
            "range": "± 61655494"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 107700000,
            "unit": "ns",
            "range": "± 80031306"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 114500000,
            "unit": "ns",
            "range": "± 68555452"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 122300000,
            "unit": "ns",
            "range": "± 73989255"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 105500000,
            "unit": "ns",
            "range": "± 64175150"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 102600000,
            "unit": "ns",
            "range": "± 53333291"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree",
            "value": 133900000,
            "unit": "ns",
            "range": "± 98043306"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 131400000,
            "unit": "ns",
            "range": "± 74783955"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 104300000,
            "unit": "ns",
            "range": "± 82616039"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure",
            "value": 112700000,
            "unit": "ns",
            "range": "± 103105819"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 98000000,
            "unit": "ns",
            "range": "± 65010768"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 120900000,
            "unit": "ns",
            "range": "± 74661167"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 83900000,
            "unit": "ns",
            "range": "± 55318080"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 119900000,
            "unit": "ns",
            "range": "± 101689183"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 140500000,
            "unit": "ns",
            "range": "± 101771557"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 128800000,
            "unit": "ns",
            "range": "± 95741109"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 141600000,
            "unit": "ns",
            "range": "± 104931596"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 156100000,
            "unit": "ns",
            "range": "± 110211115"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 129800000,
            "unit": "ns",
            "range": "± 101475908"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 104000000,
            "unit": "ns",
            "range": "± 62345809"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 118400000,
            "unit": "ns",
            "range": "± 103988653"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 128900000,
            "unit": "ns",
            "range": "± 98766846"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 144100000,
            "unit": "ns",
            "range": "± 78982846"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 115000000,
            "unit": "ns",
            "range": "± 68051451"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 131100000,
            "unit": "ns",
            "range": "± 100614561"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 98400000,
            "unit": "ns",
            "range": "± 63079632"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 101300000,
            "unit": "ns",
            "range": "± 76410797"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 120100000,
            "unit": "ns",
            "range": "± 66458182"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 120700000,
            "unit": "ns",
            "range": "± 84641656"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 82200000,
            "unit": "ns",
            "range": "± 27607245"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 97500000,
            "unit": "ns",
            "range": "± 63926911"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 126200000,
            "unit": "ns",
            "range": "± 75203457"
          },
          {
            "name": "pallet-usage - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 136500000,
            "unit": "ns",
            "range": "± 80700991"
          },
          {
            "name": "pallet-usage - tests::dust_discarded_with_noop",
            "value": 125200000,
            "unit": "ns",
            "range": "± 64511704"
          },
          {
            "name": "pallet-usage - tests::external_submitter_gets_rewarded",
            "value": 120200000,
            "unit": "ns",
            "range": "± 89326143"
          },
          {
            "name": "pallet-usage - tests::gas_properly_handled_for_trap_replies",
            "value": 130700000,
            "unit": "ns",
            "range": "± 84110700"
          },
          {
            "name": "pallet-usage - tests::ocw_double_charge",
            "value": 102800000,
            "unit": "ns",
            "range": "± 65746178"
          },
          {
            "name": "pallet-usage - tests::ocw_interval_maintained",
            "value": 92100000,
            "unit": "ns",
            "range": "± 65905159"
          },
          {
            "name": "pallet-usage - tests::ocw_interval_stretches_for_large_wait_list",
            "value": 101400000,
            "unit": "ns",
            "range": "± 81118678"
          },
          {
            "name": "pallet-usage - tests::ocw_overlapping_prevented",
            "value": 87300000,
            "unit": "ns",
            "range": "± 57586543"
          },
          {
            "name": "pallet-usage - tests::rent_charge_works",
            "value": 101200000,
            "unit": "ns",
            "range": "± 82288273"
          },
          {
            "name": "pallet-usage - tests::trap_reply_message_is_sent",
            "value": 104100000,
            "unit": "ns",
            "range": "± 69886264"
          }
        ]
      }
    ]
  }
}